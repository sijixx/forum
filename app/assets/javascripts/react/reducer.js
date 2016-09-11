var redux = require('redux');
var doPosts = require('./reducer-posts');

var names = [
  'The Forum',
  'Ethix Skeptro Viewpoint Simulator',
  'Masked Terror #3 Hatchery',
  'Funk Docta Bombay Mortuary',
  'Jason Gloss War Tribunal',
  'Will High Observatory'
]

function nameChange(state, action) {
  if (typeof state === 'undefined') {
    return names[0];
  }

  return names[Math.floor(Math.random() * names.length)];
}

function handleSettings(state, action) {
  if (typeof state === 'undefined') {
    return window.__INITIAL_STATE__.settings;
  }

  if (action.type === 'SIGCHANGE') {
    return Object.assign({}, state, {
      signature: action.value
    });
  }

  return state;
}


module.exports = redux.combineReducers({
  appName: nameChange,
  topics: doPosts,
  settings: handleSettings
});
