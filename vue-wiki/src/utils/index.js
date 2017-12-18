import axios from 'axios'
import config from '../config/config'
import AV from 'leancloud-storage'


const APP_ID = '3hQ0p8KMA1XpFF2QYai2tpJB-9Nh9j0Va';
const APP_KEY = 'ScRU84RMi1om8yg9mlpHpoFW';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

let QueryAll = `{
  repository(name: "${config.repository.name}", owner: "${config.repository.owner}") {
    id
    name
    object(expression: "${config.repository.branch}:${config.repository.resource}") {
      ... on Tree {
        entries {
          oid
          name
          type
          object {
            ... on Tree {
              entries {
                oid
                name
                type
              }
            }
          }
        }
      }
    }
  }
}`

let QueryContent = (strings, oid) => {
  return `{
    repository(name: "${config.repository.name}", owner: "${config.repository.owner}") {
      id
      name
      object(oid: "${oid}") {
        ... on Blob {
          oid
          text
        }
      }
    }
  }`.replace(/\n/g, '')
}

let util = {}

util.getGithubToken = () => {
  const query = new AV.Query('Github')
  return query.first().then((data) => {
    return data.attributes.access_key
  })
}

util.setTitle = (title) => {
  document.title = `${title} - ${config.wiki.name}`
}

util.ajax = axios.create({
  baseURL: 'https://api.github.com'
});

util.getAllRes = (access_token) => {
  return util.ajax.post('/graphql', JSON.stringify({ query: QueryAll.replace(/\n/g, '') }), {
    headers: { Authorization: `token ${access_token}` }
  }).then((res) => res.data)
}

util.getContent = (oid, access_token) => {
  return util.ajax.post('/graphql', JSON.stringify({ query: QueryContent`${oid}` }), {
    headers: { Authorization: `token ${access_token}` }
  }).then((res) => res.data)
}

export default util;
