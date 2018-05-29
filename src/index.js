import localforage from 'localforage'

function rejectWithMessage (error) {
  return Promise.reject(error.message)
}

export default (key, config = {}, replacer, reviver) => {
  localforage.config(config)

  return {
    load () {
      return localforage.getItem(key)
                        .catch(rejectWithMessage)
    },

    save (state) {
      localforage.setItem(key, state)
        .catch(rejectWithMessage)
    }
  }
}
