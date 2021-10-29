var gdjs;
(function(gdjs2) {
  let evtTools;
  (function(evtTools2) {
    let p2p;
    (function(p2p2) {
      const isValidNetworkEvent = (event) => typeof event.eventName === "string" && typeof event.data === "string";
      class EventData {
        constructor(data, sender) {
          this.data = "";
          this.sender = "";
          this.data = data;
          this.sender = sender;
        }
      }
      class Event {
        constructor() {
          this.data = [];
          this.dataloss = false;
        }
        isTriggered() {
          return this.data.length > 0;
        }
        pushData(newData) {
          if (this.dataloss && this.data.length > 0)
            this.data[0] = newData;
          else
            this.data.push(newData);
        }
        popData() {
          this.data.shift();
        }
        getData() {
          return this.data.length === 0 ? "" : this.data[0].data;
        }
        getSender() {
          return this.data.length === 0 ? "" : this.data[0].sender;
        }
      }
      let peerId = null;
      let peerConfig = {debug: 1};
      let peer = null;
      const connections = {};
      const events = {};
      let ready = false;
      let error = false;
      let lastError = "";
      const disconnectedPeers = [];
      const connectedPeers = [];
      const loadPeerJS = () => {
        if (peer !== null)
          return;
        if (peerId !== null) {
          peer = new Peer(peerId, peerConfig);
        } else {
          peer = new Peer(peerConfig);
        }
        peer.on("open", () => {
          ready = true;
        });
        peer.on("error", (errorMessage) => {
          error = true;
          lastError = errorMessage;
        });
        peer.on("connection", (connection) => {
          connection.on("open", () => {
            _onConnection(connection);
            connectedPeers.push(connection.peer);
          });
        });
        peer.on("close", () => {
          peer = null;
          loadPeerJS();
        });
        peer.on("disconnected", peer.reconnect);
      };
      const _onConnection = (connection) => {
        connections[connection.peer] = connection;
        connection.on("data", (data) => {
          if (isValidNetworkEvent(data))
            p2p2.getEvent(data.eventName).pushData(new EventData(data.data, connection.peer));
        });
        connection.on("error", () => {
          _onDisconnect(connection.peer);
        });
        connection.on("close", () => {
          _onDisconnect(connection.peer);
        });
        (function disconnectChecker() {
          if (connection.peerConnection.connectionState === "failed" || connection.peerConnection.connectionState === "disconnected" || connection.peerConnection.connectionState === "closed") {
            _onDisconnect(connection.peer);
          } else {
            setTimeout(disconnectChecker, 1e3);
          }
        })();
      };
      const _onDisconnect = (connectionID) => {
        if (!connections.hasOwnProperty(connectionID))
          return;
        disconnectedPeers.push(connectionID);
        delete connections[connectionID];
      };
      p2p2.getEvent = (name) => {
        if (!events.hasOwnProperty(name))
          events[name] = new Event();
        return events[name];
      };
      p2p2.connect = (id) => {
        if (peer === null)
          return;
        const connection = peer.connect(id);
        connection.on("open", () => {
          _onConnection(connection);
        });
      };
      p2p2.disconnectFromPeer = (id) => {
        if (connections[id])
          connections[id].close();
      };
      p2p2.disconnectFromAllPeers = () => {
        for (const connection of Object.values(connections))
          connection.close();
      };
      p2p2.disconnectFromAll = () => {
        if (peer) {
          peer.destroy();
          peer = null;
        }
      };
      p2p2.disconnectFromBroker = () => {
        if (peer) {
          peer.disconnect();
          peer = null;
        }
      };
      p2p2.onEvent = (eventName, defaultDataLoss) => {
        const event = p2p2.getEvent(eventName);
        event.dataloss = defaultDataLoss;
        return event.isTriggered();
      };
      p2p2.sendDataTo = (id, eventName, eventData) => {
        if (connections[id]) {
          connections[id].send({
            eventName,
            data: eventData
          });
        }
      };
      p2p2.sendDataToAll = (eventName, eventData) => {
        for (const id in connections)
          p2p2.sendDataTo(id, eventName, eventData);
      };
      p2p2.sendVariableTo = (id, eventName, variable) => {
        p2p2.sendDataTo(id, eventName, JSON.stringify(variable.toJSObject()));
      };
      p2p2.sendVariableToAll = (eventName, variable) => {
        p2p2.sendDataToAll(eventName, JSON.stringify(variable.toJSObject()));
      };
      p2p2.getEventData = (eventName) => p2p2.getEvent(eventName).getData();
      p2p2.getEventSender = (eventName) => p2p2.getEvent(eventName).getSender();
      p2p2.getEventVariable = (eventName, variable) => {
        variable.fromJSON(p2p2.getEventData(eventName));
      };
      p2p2.useCustomBrokerServer = (host, port, path, key, ssl) => {
        peerConfig = {
          debug: 1,
          host,
          port,
          path,
          secure: ssl,
          key: key.length === 0 ? "peerjs" : key
        };
        loadPeerJS();
      };
      p2p2.useDefaultBrokerServer = loadPeerJS;
      p2p2.overrideId = (id) => {
        peerId = id;
      };
      p2p2.getCurrentId = () => {
        if (peer == void 0)
          return "";
        return peer.id || "";
      };
      p2p2.isReady = () => ready;
      p2p2.onError = () => {
        const returnValue = error;
        error = false;
        return returnValue;
      };
      p2p2.getLastError = () => lastError;
      p2p2.onDisconnect = () => disconnectedPeers.length > 0;
      p2p2.getDisconnectedPeer = () => disconnectedPeers[0] || "";
      p2p2.onConnection = () => connectedPeers.length > 0;
      p2p2.getConnectedPeer = () => connectedPeers[0] || "";
      gdjs2.callbacksRuntimeScenePostEvents.push(() => {
        for (const eventName in events) {
          if (!events.hasOwnProperty(eventName))
            continue;
          events[eventName].popData();
        }
        if (disconnectedPeers.length > 0) {
          disconnectedPeers.shift();
        }
        if (connectedPeers.length > 0) {
          connectedPeers.shift();
        }
      });
    })(p2p = evtTools2.p2p || (evtTools2.p2p = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=B_p2ptools.js.map
