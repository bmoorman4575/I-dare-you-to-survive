var gdjs;
(function(gdjs2) {
  const PIXI = GlobalPIXIModule.PIXI;
  gdjs2.PixiFiltersTools.registerFilterCreator("Blur", {
    makePIXIFilter: function(target, effectData) {
      const blur = new PIXI.filters.BlurFilter();
      return blur;
    },
    updatePreRender: function(filter, target) {
    },
    updateDoubleParameter: function(filter, parameterName, value) {
      if (parameterName !== "blur" && parameterName !== "quality" && parameterName !== "kernelSize" && parameterName !== "resolution") {
        return;
      }
      if (parameterName === "kernelSize") {
        value = gdjs2.PixiFiltersTools.clampKernelSize(value, 5, 15);
      }
      filter[parameterName] = value;
    },
    updateStringParameter: function(filter, parameterName, value) {
    },
    updateBooleanParameter: function(filter, parameterName, value) {
    }
  });
})(gdjs || (gdjs = {}));
//# sourceMappingURL=blur-pixi-filter.js.map
