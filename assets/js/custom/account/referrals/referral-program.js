"use strict";
var KTAccountReferralsReferralProgram = {
  init: function () {
    var e, r;
    (e = document.querySelector("#kt_referral_program_link_copy_btn")),
      (r = document.querySelector("#kt_referral_link_input")),
      new ClipboardJS(e).on("success", function (s) {
        var n = e.innerHTML;
        r.classList.add("bg-success"),
          r.classList.add("text-inverse-success"),
          (e.innerHTML = "Copied!"),
          setTimeout(function () {
            (e.innerHTML = n),
              r.classList.remove("bg-success"),
              r.classList.remove("text-inverse-success");
          }, 3e3),
          s.clearSelection();
      });
  },
};
KTUtil.onDOMContentLoaded(function () {
  KTAccountReferralsReferralProgram.init();
});
