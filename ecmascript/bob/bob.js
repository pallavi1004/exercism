/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
  hey(message) {
    message = message.trim();
    if (message === "") {
      return "Fine. Be that way!";
    }
    if (this._isYell(message)) {
      if (this._isQuestion(message)) {
        return "Calm down, I know what I'm doing!";
      }
      return "Whoa, chill out!";
    } else if(this._isQuestion(message)) {
      return "Sure.";
    }
    return "Whatever."
  }

  _isYell(message) {
    return (!/[a-z]/.test(message) && /!$/.test(message)
      || /^[A-Z\s\?]+$/.test(message)
    );
  }

  _isQuestion(message) {
    return /\?$/.test(message);
  }
}

export default Bob;

