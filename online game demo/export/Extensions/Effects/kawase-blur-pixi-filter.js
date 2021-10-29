var gdjs;
(function(gdjs2) {
  gdjs2.PixiFiltersTools.registerFilterCreator("KawaseBlur", {
    makePIXIFilter: function(target, effectData) {
      const kawaseBlurFilter = new PIXI.filters.KawaseBlurFilter();
      return kawaseBlurFilter;
    },
    updatePreRender: function(filter, target) {
    },
    updateDoubleParameter: function(filter, parameterName, value) {
      const kawaseBlurFilter = filter;
      if (parameterName === "pixelizeX") {
        kawaseBlurFilter.pixelizeX = value;
      } else if (parameterName === "pixelizeY") {
        kawaseBlurFilter.pixelizeY = value;
      } else if (parameterName === "blur") {
        kawaseBlurFilter.blur = value;
      } else if (parameterName === "quality") {
        kawaseBlurFilter.quality = value;
      }
    },
    updateStringParameter: function(filter, parameterName, value) {
    },
    updateBooleanParameter: function(filter, parameterName, value) {
    }
  });
})(gdjs || (gdjs = {}));
//# sourceMappingURL=kawase-blur-pixi-filter.js.map
