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
                                                                text: "BEIJAO LINDO (*???????*)",
                                                                icon: "success",
                                                                buttons: true,
                                                            })
                                                            .then((botaoFoiClicado) => {
                                                                document.getElementById("imagem_principal").style.display = "block";
                                                            });
                                                    } else {
                                                        swal("", "n??o me ama (????????? ) (????????? ) (????????? )", "error");
                                                    }
                                                });
                                        });
                                });
                        });
                });
        });
}