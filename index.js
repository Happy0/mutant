module.exports = {
// Types
  'Array': require('./array'),
  'Dict': require('./dict'),
  'Set': require('./set'),
  'Struct': require('./struct'),
  'Value': require('./value'),
  'MappedArray': require('./mapped-array'),
  'MappedDict': require('./mapped-dict'),
// ProxyTypes
  'ProxyCollection': require('./proxy-collection'),
  'ProxyDict': require('./proxy-dict'),
  'Proxy': require('./proxy'),
// Transforms
  'computed': require('./computed'),
  'concat': require('./concat'),
  'dictToCollection': require('./dict-to-collection'),
  'idleProxy': require('./idle-proxy'),
  'keys': require('./keys'),
  'lookup': require('./lookup'),
  'map': require('./map'),
  'merge': require('./merge'),
  'throttle': require('./throttle'),
  'when': require('./when'),
// Sinks
  'h': require('./html-element'),
  'HtmlElement': require('./html-element'),
  'svg': require('./svg-element'),
  'SvgElement': require('./svg-element'),
  'watchAll': require('./watch-all'),
  'watch': require('./watch'),
  'watchThrottle': require('./watch-throttle'),
// Helpers
  'forEach': require('./for-each'),
  'forEachPair': require('./for-each-pair'),
  'isObservable': require('./is-observable'),
  'onceIdle': require('./once-idle'),
  'resolve': require('./resolve'),
  'send': require('./send')
}
