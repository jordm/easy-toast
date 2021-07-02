class Toastr {
  toasts = [];
  options;

  constructor() {
    this.options = {
      color: "primary",
      stacking: true,
      hidden: false,
      autohide: true,
      width: "450px",
      position: "top-right",
      autohide: true,
      delay: 1000,
    };
  }

  changeOptions(custom) {
    this.options = custom;
  }

  /** Adds a new alert to the DOM and toasts
   * @returns index of this newly created alert in toasts array
   */
  makeNew() {
    let a = document.createElement("div");
    a.innerHTML = `
      <div class="toast-header">
        <strong class="me-auto toast-title">MDBootstrap</strong>
        <button
          type="button"
          class="btn-close"
          data-mdb-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">Undefined.</div>`;

    a.classList.add("toast", "fade", "text-white");
    document.body.appendChild(a);
    let index = this.toasts.push(a);

    return index - 1;
  }

  // blue alert
  primary(text, title, customOptions = false) {
    let a = this.makeNew();

    let options = customOptions
      ? customOptions
      : {
          color: "primary",
          stacking: true,
          hidden: false,
          autohide: true,
          width: "450px",
          position: "top-right",
          autohide: true,
          delay: 5000,
        };

    if (title) $(this.toasts[a]).find(".toast-title").text(title);
    else $(this.toasts[a]).find(".toast-header").prop("hidden", true);
    $(this.toasts[a]).find(".toast-body").text(text);
    let alertInstance = new mdb.Toast(this.toasts[a], options);

    alertInstance.show();

    // remove alert from dom after hidden
    $(this.toasts[a]).on("hidden.mdb.toast", function () {
      $(this).remove();
    });
  }

  // green alert
  success(text, title = false, customOptions = false) {
    let a = this.makeNew();

    let options = customOptions
      ? customOptions
      : {
          color: "success",
          stacking: true,
          hidden: false,
          autohide: true,
          width: "450px",
          position: "top-right",
          autohide: true,
          delay: 5000,
        };

    if (title) $(this.toasts[a]).find(".toast-title").text(title);
    else $(this.toasts[a]).find(".toast-header").prop("hidden", true);
    $(this.toasts[a]).find(".toast-body").text(text);
    let alertInstance = new mdb.Toast(this.toasts[a], options);

    alertInstance.show();

    // remove alert from dom after hidden
    $(this.toasts[a]).on("hidden.mdb.toast", function () {
      $(this).remove();
    });
  }

  // red alert
  error(text, title = false, customOptions = false) {
    let a = this.makeNew();

    let options = customOptions
      ? customOptions
      : {
          color: "danger",
          stacking: true,
          hidden: false,
          autohide: true,
          width: "450px",
          position: "top-right",
          autohide: true,
          delay: 5000,
        };

    if (title) $(this.toasts[a]).find(".toast-title").text(title);
    else $(this.toasts[a]).find(".toast-header").prop("hidden", true);
    $(this.toasts[a]).find(".toast-body").text(text);
    let alertInstance = new mdb.Toast(this.toasts[a], options);

    alertInstance.show();

    // remove alert from dom after hidden
    $(this.toasts[a]).on("hidden.mdb.toast", function () {
      $(this).remove();
    });
  }

  // yellow/orange alert
  warning(text, title = false, customOptions = false) {
    let a = this.makeNew();

    let options = customOptions
      ? customOptions
      : {
          color: "warning",
          stacking: true,
          hidden: false,
          autohide: true,
          width: "450px",
          position: "top-right",
          autohide: true,
          delay: 5000,
        };

    if (title) $(this.toasts[a]).find(".toast-title").text(title);
    else $(this.toasts[a]).find(".toast-header").prop("hidden", true);
    $(this.toasts[a]).find(".toast-body").text(text);
    let alertInstance = new mdb.Toast(this.toasts[a], options);

    alertInstance.show();

    // remove alert from dom after hidden
    $(this.toasts[a]).on("hidden.mdb.toast", function () {
      $(this).remove();
    });
  }

  // light blue alert
  info(text, title = false, customOptions = false) {
    let a = this.makeNew();

    let options = customOptions
      ? customOptions
      : {
          color: "info",
          stacking: true,
          hidden: false,
          autohide: true,
          width: "450px",
          position: "top-right",
          autohide: true,
          delay: 5000,
        };

    // set title of toast
    if (title) $(this.toasts[a]).find(".toast-title").text(title);
    else $(this.toasts[a]).find(".toast-header").prop("hidden", true);

    // set text body of toast
    $(this.toasts[a]).find(".toast-body").text(text);

    // create toast instance and show
    var alertInstance = new mdb.Toast(this.toasts[a], options);
    alertInstance.show();

    // remove alert from dom after hidden
    $(this.toasts[a]).on("hidden.mdb.toast", function () {
      $(this).remove();
    });
  }

  /** Wipe all toasts from DOM */
  flush() {
    this.toasts.forEach((a) => $(a).remove());
  }
}

var toastr = new Toastr();

$(document).ready(function () {});
