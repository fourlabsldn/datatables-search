/* globals xController, jQuery */
xController(function datatablesSearch(wrapper) {
  'use strict';

  const input = wrapper.querySelector('input');
  const datatableId = input.getAttribute('aria-controls');

  if (datatableId === null || datatableId.length === 0) {
    throw new Error('No selector for searchable datatable provided');
  }

  const search = $.fn.dataTable.util.throttle(term => { $datatable.search(term).draw(); }, 1000);

  const datatable = document.querySelector(`#${datatableId}`);
  let $datatable;

  input.addEventListener('keyup', (e) => {
    if (datatable.length === 0) {
      throw Error('Searchable datatable not found');
    }

    if ($datatable === undefined) {
      $datatable = jQuery(datatable).dataTable().api();
    }

    const value = (e.srcElement ? e.srcElement.value : e.target.value)
        .replace(/[^\x00-\xFF]/g, '') // remove non-ASCII characters
    ;

    search(value);
  });
});
