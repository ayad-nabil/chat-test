<script type="text/javascript">
    $(document).ready(function() {
        var baseUrl = '/{{env("ADMIN_HASH")}}'+'/admin/';

        $(".navbar-toggle").on("click", function(e) {
            e.preventDefault();
            $(".sidebar").toggleClass('displayed');
        });

        /**
         * Handling Table Navigation Events
         */
        $("#select-all").on("click", function(e) {
            e.preventDefault();
            $(this).hide();
            $("#unselect-all").show();
            $(".table-check-row, #checkbox-select-all").prop("checked", true);
        });
        $("#unselect-all").on("click", function(e) {
            e.preventDefault();
            $(this).hide();
            $("#select-all").show();
            $(".table-check-row, #checkbox-select-all").prop("checked", false);
        });
        $("#checkbox-select-all").on("click", function() {
            $(".table-check-row").prop("checked", $(this).prop("checked"));
            $("#select-all, #unselect-all").toggle();
        });
        $("#reg-notifications-toggle-search").on("click", function(e) {
            $("#reg-notifications-search-form").toggle();
            $('#reg-notifications-search-form input[type="search"]').focus();
        });
        $("#reg-notifications-delete").on('click', function(e) {
            e.preventDefault();
            var ids = [];
            $.each($('#reg-notifications-section .section2 .table tbody tr'), function(index, value) {
                var checkbox = $(this).find("td input[type='checkbox']");
                if(checkbox.prop("checked")){
                    ids.push(checkbox.attr("check_id"));
                }
            });
            if(ids.length > 0) {
                var confirmationMsg = (ids.length > 2) ? "هذه التنبيهات؟" : ids.length == 2 ? "هذين التنبيهين؟" : "هذا التنبيه؟" ;
                var confirmation = confirm("هل أنت متأكد من حذف "+confirmationMsg);
                if(confirmation) {
                    $.ajax({
                        url: baseUrl+"reg-notifications/delete",
                        type: "POST",
                        data: {
                            action: "deleteRegNotifications-{{env("ADMIN_HASH")}}",
                            ids: ids
                        },
                        success: function(result) {
                            try {
                                var json = JSON.parse(result);
                                if(!json.error) {
                                    for(var key in json.deleteds) {
                                        $('#reg-notifications-section .section2 .table tbody tr[row_id="'+json.deleteds[key]+'"]').remove();
                                    }
                                }
                            } catch(e) {
                                //console.log(e);
                            }
                        }
                    });
                }
            } else {
                alert("الرجاء إختيار على الأقل تنبيه واحد للحذف");
            }
        });
        $("#reg-notifications-empty").on('click', function(e) {
            e.preventDefault();
            var confirmation = confirm("هل أنت متأكد من حذف جميع التنبيهات؟");
            if(confirmation) {
                $.ajax({
                    url: baseUrl+"reg-notifications/empty",
                    type: "POST",
                    data: {
                        action: "emptyRegNotifications-{{env("ADMIN_HASH")}}"
                    },
                    success: function(result) {
                        try {
                            var json = JSON.parse(result);
                            if(json.error === false) {
                                window.location.reload();
                            }
                        } catch(e) {
                            //console.log(e);
                        }
                    }
                });
            }

        });

        /**
         * ***************************************************************************************************
         */

    });
</script>