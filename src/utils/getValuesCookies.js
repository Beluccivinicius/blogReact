const Changercookies = {
  takeValue: function (keyString, cookie) {
    let busca = `${keyString}=`;

    if (typeof cookie != "string") return false;

    let indexValue = cookie.indexOf(busca);

    let lastStringValue = cookie.indexOf("; ", indexValue);

    if (lastStringValue == -1) {
      return cookie.substring(indexValue + busca.length);
    }

    return cookie.substring(indexValue + busca.length, lastStringValue);
  },
};

export default Changercookies;
