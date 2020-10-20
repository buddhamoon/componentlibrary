class HyTableFirst {
    constructor ( root ) {
        this.data = root;
        this.value = null;
    }
    setValue (value) {
        this.value = value;
        console.log('调用成功',value);
        return this;
    };
    getData () {};
    upData () {};
    renderForm () {};


};