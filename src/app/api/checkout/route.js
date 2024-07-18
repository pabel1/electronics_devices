export function submitForm(data) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    const callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    
    window[callbackName] = function(response) {
      delete window[callbackName];
      document.body.removeChild(script);
      if (response.success) {
        resolve(response);
      } else {
        reject(new Error(response.error || 'Unknown error'));
      }
    };

    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwiYfat785O-XQzkwpkmTTd_Y-o2h_T26U5_EB4wrsMl10C0v_mclqA9WWezWUu14pBuA/exec';
    const queryString = Object.keys(data).map(key => 
      `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    ).join('&');

    script.src = `${GOOGLE_SCRIPT_URL}?callback=${callbackName}&${queryString}`;
    document.body.appendChild(script);
  });
}
