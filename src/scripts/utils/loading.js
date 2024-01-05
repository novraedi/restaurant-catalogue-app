const Loading = {
  init(loading) {
    this._timeForLoading(loading);
  },

  _timeForLoading(loading) {
    loading.classList.remove('spinner--hidden');
    setTimeout(() => {
      loading.classList.add('spinner--hidden');
    }, 1000);
  },
};

export default Loading;
