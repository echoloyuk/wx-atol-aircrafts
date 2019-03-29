Component({
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    onTapMask: {
      type: Function,
      value: null
    }
  },
  methods: {
    tapMaskHandler: function () {
      this.triggerEvent('onTapMask');
    }
  }
})