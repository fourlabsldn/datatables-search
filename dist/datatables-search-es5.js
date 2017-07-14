(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

/* globals xController, jQuery */
xController(function datatablesSearch(wrapper) {
  'use strict';

  var input = wrapper.querySelector('input');
  var datatableId = input.getAttribute('aria-controls');

  if (datatableId === null || datatableId.length === 0) {
    throw new Error('No selector for searchable datatable provided');
  }

  var search = $.fn.dataTable.util.throttle(function (term) {
    $datatable.search(term).draw();
  }, 1000);

  var datatable = document.querySelector('#' + datatableId);
  var $datatable = void 0;

  input.addEventListener('keyup', function (e) {
    if (datatable.length === 0) {
      throw Error('Searchable datatable not found');
    }

    if ($datatable === undefined) {
      $datatable = jQuery(datatable).dataTable().api();
    }

    var value = (e.srcElement ? e.srcElement.value : e.target.value).replace(/[^\x00-\xFF]/g, '');

    search(value);
  });
});

})));

//# sourceMappingURL=datatables-search-es5.js.map
