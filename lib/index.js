"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMobile = isMobile;
exports.isDesktop = isDesktop;
exports.outIf = outIf;
exports.toBool = toBool;
exports.validURL = validURL;
exports.groupBy = groupBy;
exports.except = except;
exports.exceptMany = exceptMany;
exports.has = has;
exports.only = only;
exports.onlyMany = onlyMany;
exports.getLocale = getLocale;
exports.formatCurrency = formatCurrency;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function isMobile() {
  return /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function isDesktop() {
  return !isMobile();
}

function outIf(condition, output) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return condition ? output : defaultValue;
}

function toBool(data) {
  return data ? true : false;
}

function validURL(url) {
  var valid = false;
  var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!-/]))?/;

  try {
    new URL(url);
    valid = true;
  } catch (_) {
    valid = false;
  }

  return !!pattern.test(url) || valid;
}

function groupBy(data, key) {
  var temp = {};
  data.forEach(function (item) {
    var property = item[key];

    if (!(property in temp)) {
      temp[property] = [];
    }

    temp[property].push(item);
  });
  return Object.keys(temp).map(function (key) {
    return temp[key];
  });
}

function except(data, keys) {
  var copy = {};

  for (var key in data) {
    if (!keys.includes(key)) {
      copy[key] = data[key];
    }
  }

  return copy;
}

function exceptMany(data, keys) {
  return _toConsumableArray(data).map(function (item) {
    return except(item, keys);
  });
}

function has(keys, data) {
  return keys.includes(data);
}

function only(data, keys) {
  var result = {};

  for (var key in data) {
    if (keys.includes(key)) {
      result[key] = data[key];
    }
  }

  return result;
}

function onlyMany(data, keys) {
  return _toConsumableArray(data).map(function (item) {
    return only(item, keys);
  });
}

function getLocale() {
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0];
  } else {
    return navigator['userLanguage'] || navigator.language || navigator['browserLanguage'] || 'en-US';
  }
}

function formatCurrency(value) {
  var currency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'PHP';
  var formatter = new Intl.NumberFormat(getLocale(), {
    style: 'currency',
    currency: currency
  });
  return formatter.format(value).replace(/\D00(?=\D*$)/, '');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJpc01vYmlsZSIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpc0Rlc2t0b3AiLCJvdXRJZiIsImNvbmRpdGlvbiIsIm91dHB1dCIsImRlZmF1bHRWYWx1ZSIsInRvQm9vbCIsImRhdGEiLCJ2YWxpZFVSTCIsInVybCIsInZhbGlkIiwicGF0dGVybiIsIlVSTCIsIl8iLCJncm91cEJ5Iiwia2V5IiwidGVtcCIsImZvckVhY2giLCJpdGVtIiwicHJvcGVydHkiLCJwdXNoIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImV4Y2VwdCIsImNvcHkiLCJpbmNsdWRlcyIsImV4Y2VwdE1hbnkiLCJoYXMiLCJvbmx5IiwicmVzdWx0Iiwib25seU1hbnkiLCJnZXRMb2NhbGUiLCJsYW5ndWFnZXMiLCJsZW5ndGgiLCJsYW5ndWFnZSIsImZvcm1hdEN1cnJlbmN5IiwidmFsdWUiLCJjdXJyZW5jeSIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImZvcm1hdCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxTQUFTQSxRQUFULEdBQW9CO0FBQzFCLFNBQU8sK0VBQStFQyxJQUEvRSxDQUFvRkMsU0FBUyxDQUFDQyxTQUE5RixDQUFQO0FBQ0E7O0FBRU0sU0FBU0MsU0FBVCxHQUFxQjtBQUMzQixTQUFPLENBQUNKLFFBQVEsRUFBaEI7QUFDQTs7QUFFTSxTQUFTSyxLQUFULENBQWtCQyxTQUFsQixFQUFzQ0MsTUFBdEMsRUFBOEU7QUFBQSxNQUE3QkMsWUFBNkIsdUVBQVQsSUFBUztBQUNwRixTQUFPRixTQUFTLEdBQUdDLE1BQUgsR0FBYUMsWUFBN0I7QUFDQTs7QUFDTSxTQUFTQyxNQUFULENBQWdCQyxJQUFoQixFQUEyQjtBQUNqQyxTQUFPQSxJQUFJLEdBQUcsSUFBSCxHQUFVLEtBQXJCO0FBQ0E7O0FBRU0sU0FBU0Ms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QyxTQUFTLENBQUNrQyxTQUFWLENBQW9CLENBQXBCLENBQVA7QUFDQSxHQUZELE1BRU87QUFDTixXQUFRbEMsU0FBRCxDQUFtQixjQUFuQixLQUFzQ0EsU0FBUyxDQUFDb0MsUUFBaEQsSUFBNkRwQyxTQUFELENBQW1CLGlCQUFuQixDQUE1RCxJQUFxRyxPQUE1RztBQUNBO0FBQ0Q7O0FBRU0sU0FBU3FDLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQXlEO0FBQUEsTUFBbEJDLFFBQWtCLHVFQUFQLEtBQU87QUFDL0QsTUFBTUMsU0FBUyxHQUFHLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUFzQlQsU0FBUyxFQUEvQixFQUFtQztBQUNwRFUsSUFBQUEsS0FBSyxFQUFFLFVBRDZDO0FBRXBESixJQUFBQSxRQUFRLEVBQVJBO0FBRm9ELEdBQW5DLENBQWxCO0FBS0EsU0FBT0MsU0FBUyxDQUFDSSxNQUFWLENBQWlCTixLQUFqQixFQUF3Qk8sT0FBeEIsQ0FBZ0MsY0FBaEMsRUFBZ0QsRUFBaEQsQ0FBUDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlKCkge1xyXG5cdHJldHVybiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxNYWN8TWFjaW50b3NofGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGVza3RvcCgpIHtcclxuXHRyZXR1cm4gIWlzTW9iaWxlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvdXRJZjxUPihjb25kaXRpb246IGJvb2xlYW4sIG91dHB1dDogVCwgZGVmYXVsdFZhbHVlOiBhbnkgPSBudWxsKTogVCB7XHJcblx0cmV0dXJuIGNvbmRpdGlvbiA/IG91dHB1dCA6IChkZWZhdWx0VmFsdWUgYXMgdW5rbm93biBhcyBUKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdG9Cb29sKGRhdGE6IGFueSkge1xyXG5cdHJldHVybiBkYXRhID8gdHJ1ZSA6IGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRVUkwodXJsOiBzdHJpbmcpIHtcclxuXHRsZXQgdmFsaWQgPSBmYWxzZTtcclxuXHR2YXIgcGF0dGVybiA9IC8oZnRwfGh0dHB8aHR0cHMpOlxcL1xcLyhcXHcrOnswLDF9XFx3KkApPyhcXFMrKSg6WzAtOV0rKT8oXFwvfFxcLyhbXFx3IyE6Lj8rPSYlQCEtL10pKT8vO1xyXG5cdHRyeSB7XHJcblx0XHRuZXcgVVJMKHVybCk7XHJcblx0XHR2YWxpZCA9IHRydWU7XHJcblx0fSBjYXRjaCAoXykge1xyXG5cdFx0dmFsaWQgPSBmYWxzZTtcclxuXHR9XHJcblx0cmV0dXJuICEhcGF0dGVybi50ZXN0KHVybCkgfHwgdmFsaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBncm91cEJ5PFQsIEsgZXh0ZW5kcyBrZXlvZiBUPihkYXRhOiBBcnJheTxUPiwga2V5OiBLKSB7XHJcblx0Y29uc3QgdGVtcDogeyBba2V5OiBzdHJpbmddOiBBcnJheTxUPiB9ID0ge307XHJcblxyXG5cdGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cdFx0Y29uc3QgcHJvcGVydHk6IGFueSA9IGl0ZW1ba2V5XTtcclxuXHRcdGlmICghKHByb3BlcnR5IGluIHRlbXApKSB7XHJcblx0XHRcdHRlbXBbcHJvcGVydHldID0gW107XHJcblx0XHR9XHJcblx0XHR0ZW1wW3Byb3BlcnR5XS5wdXNoKGl0ZW0pO1xyXG5cdH0pO1xyXG5cdHJldHVybiBPYmplY3Qua2V5cyh0ZW1wKS5tYXAoKGtleSkgPT4gdGVtcFtrZXldKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4Y2VwdDxULCBLIGV4dGVuZHMga2V5b2YgVD4oZGF0YTogVCwga2V5czogQXJyYXk8Sz4pIHtcclxuXHRjb25zdCBjb3B5ID0ge30gYXMgVDtcclxuXHJcblx0Zm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xyXG5cdFx0aWYgKCFrZXlzLmluY2x1ZGVzKGtleSBhcyBhbnkpKSB7XHJcblx0XHRcdGNvcHlba2V5XSA9IGRhdGFba2V5XTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBjb3B5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXhjZXB0TWFueTxULCBLIGV4dGVuZHMga2V5b2YgVD4oZGF0YTogQXJyYXk8VD4sIGtleXM6IEFycmF5PEs+KSB7XHJcblx0cmV0dXJuIFsuLi5kYXRhXS5tYXAoKGl0ZW0pID0+IGV4Y2VwdChpdGVtLCBrZXlzKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXM8VD4oa2V5czogQXJyYXk8VD4sIGRhdGE6IFQpIHtcclxuXHRyZXR1cm4ga2V5cy5pbmNsdWRlcyhkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9ubHk8VCwgSyBleHRlbmRzIGtleW9mIFQ+KGRhdGE6IFQsIGtleXM6IEFycmF5PEs+KSB7XHJcblx0Y29uc3QgcmVzdWx0ID0ge30gYXMgVDtcclxuXHJcblx0Zm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xyXG5cdFx0aWYgKGtleXMuaW5jbHVkZXMoa2V5IGFzIGFueSkpIHtcclxuXHRcdFx0cmVzdWx0W2tleV0gPSBkYXRhW2tleV07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25seU1hbnk8VCwgSyBleHRlbmRzIGtleW9mIFQ+KGRhdGE6IEFycmF5PFQ+LCBrZXlzOiBBcnJheTxLPikge1xyXG5cdHJldHVybiBbLi4uZGF0YV0ubWFwKChpdGVtKSA9PiBvbmx5KGl0ZW0sIGtleXMpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZSgpIHtcclxuXHRpZiAobmF2aWdhdG9yLmxhbmd1YWdlcyAmJiBuYXZpZ2F0b3IubGFuZ3VhZ2VzLmxlbmd0aCkge1xyXG5cdFx0cmV0dXJuIG5hdmlnYXRvci5sYW5ndWFnZXNbMF07XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiAobmF2aWdhdG9yIGFzIGFueSlbJ3VzZXJMYW5ndWFnZSddIHx8IG5hdmlnYXRvci5sYW5ndWFnZSB8fCAobmF2aWdhdG9yIGFzIGFueSlbJ2Jyb3dzZXJMYW5ndWFnZSddIHx8ICdlbi1VUyc7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3kodmFsdWU6IG51bWJlciwgY3VycmVuY3kgPSAnUEhQJykge1xyXG5cdGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChnZXRMb2NhbGUoKSwge1xyXG5cdFx0c3R5bGU6ICdjdXJyZW5jeScsXHJcblx0XHRjdXJyZW5jeSxcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIGZvcm1hdHRlci5mb3JtYXQodmFsdWUpLnJlcGxhY2UoL1xcRDAwKD89XFxEKiQpLywgJycpO1xyXG59XHJcbiJdfQ==