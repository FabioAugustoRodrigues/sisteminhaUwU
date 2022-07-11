function ativaSisteminhaUwU() {
    swal({
            title: "",
            text: "You",
            icon: "info",
            dangerMode: true,
        })
        .then((botaoFoiClicado) => {
            swal({
                    title: "",
                    text: "And",
                    icon: "info",
                    dangerMode: true,
                })
                .then((botaoFoiClicado) => {
                    swal({
                            title: "",
                            text: "Me",
                            icon: "warning",
                            dangerMode: true,
                        })
                        .then((botaoFoiClicado) => {
                            swal({
                                    title: "",
                                    text: "Always",
                                    icon: "error",
                                    dangerMode: true,
                                })
                                .then((botaoFoiClicado) => {
                                    swal({
                                            title: "",
                                            text: "Forever",
                                            icon: "warning",
                                            dangerMode: true,
                                        })
                                        .then((botaoFoiClicado) => {
                                            swal({
                                                    title: "",
                                                    text: "Me da um beijo?",
                                                    buttons: true,
                                                })
                                                .then((botaoFoiClicado) => {
                                                    if (botaoFoiClicado) {
                                                        swal({
                                                                title: "",
                                                                text: "BEIJAO LINDO (*ˊᗜˋ*)",
                                                                icon: "success",
                                                                buttons: true,
                                                            })
                                                            .then((botaoFoiClicado) => {
                                                                document.getElementById("imagem_principal").style.display = "block";
                                                            });
                                                    } else {
                                                        swal("", "não me ama (ￗ﹏ￗ ) (ￗ﹏ￗ ) (ￗ﹏ￗ )", "error");
                                                    }
                                                });
                                        });
                                });
                        });
                });
        });
}