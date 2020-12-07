const Helpers = {
  flickrApi(stop_name, city) {
    let search = `${stop_name.replace(/ /gi, '+')}+${city.replace(/ /gi, '+')}`;
    return fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=af793aee1df81687d35b01aa0902524d&text=${search}&format=json&nojsoncallback=1&sort=interestingness-desc&safe_search=1`
    )
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        } else {
          return res.json();
        }
      })
      .then((res) => {
        return res;
      });
  },

  generateFlikrLink(res) {
    if (res.photos.photo.length === 0) {
      return '';
    }
    const flikr = res.photos.photo[0];
    const link = `https://live.staticflickr.com/${flikr.server}/${flikr.id}_${flikr.secret}.jpg`;
    return link;
  },

  customModalStyles: {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderStyle: 'none',
    },
  },
};

export default Helpers;
