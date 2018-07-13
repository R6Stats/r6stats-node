'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var axios = _interopDefault(require('axios'));

class MissingUserAgentError extends Error {}

class AuthenticationError extends Error {}

class NotAuthenticatedError extends Error {}

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

class R6StatsAPI {
  constructor({ loginId, password, userAgent = null, baseUrl = null, options = null }) {
    if (!baseURL) throw new Error('Base URL must be provided before release');
    if (!userAgent) throw new MissingUserAgentError('A user agent must be specified for client recognition');

    this.authConfig = { loginId, password };
    this.authData = { token: null };

    this.$axios = axios.create(this._baseConfig({ baseUrl, userAgent, options }));
  }

  async authenticate() {
    try {
      const { data: { payload: { token } } } = await this.$axios({
        method: 'post',
        url: '/auth/login',
        data: {
          login_id: this.authConfig.loginId,
          password: this.authConfig.password
        }
      });
      this.authData.token = token;
    } catch (e) {
      let msg;
      switch (e.response.status) {
        case 401:
          msg = 'Invalid login or password';
          break;
        case 422:
          msg = 'Login or password not provided';
          break;
        default:
          msg = 'Unknown authentication error occurred';
          break;
      }
      throw new AuthenticationError(msg);
    }
  }

  async call(config) {
    if (!this.isAuthenticated) throw new NotAuthenticatedError('The client must call .authenticate() before making API calls');
    return await this.$axios(_extends({
      headers: {
        'Authorization': `Bearer: ${this.authData.token}`
      }
    }, config));
  }

  isAuthenticated() {
    return this.authData.token != null;
  }

  _baseConfig(config) {
    return _extends({
      baseURL: config.baseUrl,
      headers: {
        'User-Agent': config.userAgent,
        'Content-Type': 'application/json'
      }
    }, config.options);
  }
}

module.exports = R6StatsAPI;
