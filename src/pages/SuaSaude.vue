<template>
  <q-page>

    <!-- Title -->
    <div class="row">
        <div class="col-12 q-pt-lg q-mb-md q-mt-sm">
            <label class="text-subtitle1 text-weight-bolder q-ml-lg q-mt-lg"> SUA SAÚDE </label>
        </div>
    </div>  



    <!-- Cards Pontos Proximos -->
    <div class="row q-ml-lg">
        <div class="col-12 q-mt-xs ">
            <label class="text-subtitle1 text-weight-bolder">SUAS INFORMAÇÕES</label> <br>
            <label class="text-subtitle1 text-weight-bolder">Peso:</label> <label class="text-subtitle1 q-mr-md"> 78kg </label> <a href="">Atualizar</a> <br>
            <label class="text-subtitle1 text-weight-bolder">IMC:</label> <label class="text-subtitle1"> Está Excelente </label> <br>
            <label class="text-subtitle1 text-weight-bolder">Humor:</label> <label class="text-subtitle1"> Feliz </label> <br>
            <label class="text-subtitle1 text-weight-bolder">Água:</label> <label class="text-subtitle1"> Está bebendo regularmente. </label> <br>
            <label class="text-subtitle1 text-weight-bolder">Noites de Sono:</label> <label class="text-subtitle1"> Excelente. </label> <br>
        </div>
    </div>





    <div class="row text-center q-mt-lg">
        <div class="col-12 q-mt-lg">
            <label class="text-subtitle1 text-weight-bolder">DICAS DE ESPECIAIS</label>
        </div>
    </div>




    <!-- Cards Noticias de Saúde-->
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                    <div class="text-h5 q-mt-sm q-mb-xs">Exercicio Fisico</div>
                    <div class="text-caption text-grey">
                        10 dicas de como exercitar no caminhão.
                    </div>
                </q-card-section>

                <q-card-section class="col-7 flex flex-center">
                <q-img
                    class="rounded-borders"
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExMVFhUXFxUZFxgXFRgYGhgYFxUXGRoXFxYYHiggGB0lGxcdITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgAEAgMHAQj/xABFEAACAQIEAgcECAQDBwUBAAABAhEAAwQSITEFQQYTIlFhcYEykaGxFCNCUnLB0fAHYoKSU+HxFRYzVHOy0kODk6LCNP/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACcRAAICAgIBBAICAwAAAAAAAAABAhEDIRIxUQQTIkEUYXGxFYGR/9oADAMBAAIRAxEAPwDnGJswxHurSsiiPFrUQ3p76ogzRFRsttRdTKiP3p/lQULRfCt2R5/v50QMXgsXWH83zooKqXh9e/p8q2X7+WNJJ2H5mggstLWYoYMU/ePdWxcW/h7v86JqCQFZBKHrjH/l9x/Wtgx7dy/GsYu9XWXV1UXiJ+6vvNZDiY+5/wDasaiz1P7isThFP2V91eJxFOaN6Fa3pjbXMXB/SD8jRAVG4ZbO9tfdXtrAqk5VAnuq8MVZ++487bflWRxFn/E96OPyrGsGXE1Hn89KhSrWIuWYP1i+5v0rFrlgb3fcrH8q1BNSJVrCcKFxpAJ8OXrWj/adhfZR3PjCj9a04jjN1xlBCJ91NJ823PwoBDOM4mlgG3ZhruzPuqeA7zQNEJJJJJJkk6knxqoW5DSifDxmXXcaVjHqWqG8Vw2U5uTfOmO1h6JWOEZxDKCPEUTCNwngty+doSfaPPy76euF8ES0ugAAGrH5k1dJtWRGhjloAPM7D5+FL3FelSDRe2Rtp2Ae8LzPifSKNCt+Bj61VEqQi/4jDU/9ND/3HTwNA+I9K7dsFbWpO7EyWPeWOppcd8VimntEfD9KOcG6B3bmpBPjsP7jp7qIteRcxfFL147k/Kt+B6P3bhEgyeUGfcK6vwnoJatwXI8k/Njr7opnweBt2hFtFXyGvqedCwWc14R/Dl2ANzsDx393Km7h3QvD2u8nvNMgry9cCqWJAA5kwPfWTYr/AGUTwi1EFFI8QD86pXuieFbe0o/D2flVO9xXFOeyjZdYIAtqfElwXPpFDMficZBJvZDEhLZZjA721jzmrxxTkc2TPCCsJnoHhe5v7jXlKP0XEN2i7mecufjOtSrfiy8nF/k8fhgPEoHTzFL6mjXDbsjKaE461luMO/X3157PcRktX8KdDQxCavYY1jMqYkReY94B+dVcQ0v5AD361v4qYKnXY7elC+ugnfWsFF0VsWqVnEzy56fs1n9LHdRMXLg0rbwzB9Y6rIBJAk7amNYqoMWu01awWPRSGBEj9QazCjpFv+EmIykm5aBE6S/Lxikjj/BDhrrWngsp1IkiCAQR36EV0jhP8WjkHWWN5hg8A8tJWDFLvG+I28Rf69ViTblGIZWVAohiDMdn40isLoVLfDMyyvLf9mrKcNdRqf3E01YzGo5Zo9oQAi7Ds7zH3fjy5icbmYnKrRAG3cIqqRN2BwtelKtDCP8AdPurI4Zvun3UaBYNu29DVV0ow2Gb7p91aLfD7hAhGPpWoIL6ut1u1Ra1wG+drbeoolhujb/bZFHiwn3UAi/9DM6Dej3BuDv3b0RtfRrCku4cr93X4bih1/pPevHq8JabukD86Bg49uzYE3GE9372pe4p0vnsWVJ7on57+6PWtmH6KXLhzYq9/Qhk+p2Hxpx4NwCxaAyIB47sfNjr7qIrkl2c+w/AMbiiC8ovIHT3IKaOEfw6VdX38fyA/M082Qq7ACvMRxK1b9t1XzOvoNzRSb6JyypFPC8DNodhLVyNs+ZI9wYfCr6428ujYW5Hej22X3Fg3/1oe/SIn/gWL109+UqvvOvwrWU4ne/w7C+cmPMT+VVWCb71/JyS9djWlt/oOjGpEtmQd7oygf1ER8aFY7pdhk0Um4fAQP7mj4TVZeh7OZvYh7h93xaaOcO6KYS1r1Ss3e/b+DaVT2scdydkfyM+R1CPFeWK79JMVe0sW8v4FNxv7iI+FFOi/B7xzXsRme5Jy9Y0hR4ATFNyWYEKAB3AQPdVm3h9I2FaWWCVRVBxenzc+U5N/wBAG7wsuZuOT3KogfGZq1hOEWkBy21k7kiSfOaMLhhWwWhUnn1SOhekt3IoC03fUojkFSp+4V/FXk+TbF9rTQ2o76t8XAOW4NjVF+JK266c57/CtthgyMgPio7iOVTOo1JVzDGh9l5q/hefkayMyrxcaD1oWy0Y4qvZB8fyoRWZkVBoYr2fmayxC86w8ff599AJtQzm9auJhWKgEgRMd+sHl671f4PgsgzMJZo0iYH73o7YwlpyAwyfzLt6qfyigNHj9gSxgl6vKbjSNlACg+bMYEeWvxGu7g3iYBHgQffBNHMdwtrW65lOzKZU+vI+BitGYJrENyiQf9KW2dCxRa0VbuCyhAUgkbEa1BhiN9PPT4b1mLjsdWOu+p51ut4eSABJOwFNzJ+x+zE4chFcMYLOuhI1UIf/ANj3GvFLfff+5v1pqHBUNq3ba4VKZifqrh1eJMqsbAVrPR+1/jr6pcHzWqLo55VeheW7c/xLn97frWS3Lg0Fx/72/Wj54An/ADFn1ePmKg4AOV6wfK8n60RQF1tz77e+sLrGN+a8h94c6Yf927p2yt+F1PyNUOJ8Hu20zOjAZk1j+cc6NC2zFLYOjSV5jaR3aUbsYsBcqZUX7qiB8N6FdURWQtmmSJuTDXDroLOzHLbtIblx94A2AX7RJ0Aps6N2BiMOl7LcTPMBomJ0IjcEa0udCbds3zYvIr2sQuQhhIzKcyz7iPMiutWsIAI2A2Aqjah2c8cbzNu9C3/sNDvnP9TD5GrOC4Jbt6rbUHvyiffTCtkVkFFK/UPpDx9Bju3t/wDf7Bq4Q1tGC8av1Kk8smdKwQRWXBiti2FHKttSlcmyihFdI8ivalSlGJUrB7qjcitDY1eUmsay1Uqh9PPdUrAs+R7a1aS13b1e4PwpbjZST8KYW6IMB2bgP4lj4gn5U3EFicEKmiWAM1bxvAr67pI71IPw3qhhFKvBBE8jpQqgmeOWbZ9D8qCxTDik7DeXypeubUTIwcVrwVubiryJ18hr+VQE1vwLAXEY9/z0/OlCNvV7MNiKt4a2SQoEk1jwuGm2xgHUHuNF8FZFs/zbeXhrRMEuG4TJoBnJgMDqCDyIPLvpZ6Q8MRb7JZeQDDE7A/dB1kDx221NGOLdIUsg2bTTcYdu4NkH3UPM+I289g2AuKZHP8v1mkl0UxyaejbguBLu7k+CwPiZ+VP3AOhtm/Zm1deyw0bKoL+BzNqAd9I1FJgvF2CrOnpHdr510T+Hd4Wy1q5eLXGjKrLl0G4B+0QfhSQbvZXLtUe/7i4obcVxPqCfncrL/czGjbilw+doH5tTvQTH8eNu61sW5CxrmjUgHu8a6I8n0cjpdgJuiXEOXEAfxWEPzBrWeinEf+awzfiw9v8AK3TXwniovZhlylYnWd58B3URoNtaZlT6Od3ui3EOaYG54G3HyC0v9IeHX7VordwZtAlPrLNxjbHbWZSSDpsCw1iuyUO49Zd7OVFzEshIkDsq4cjtbzliO9htuMpGcTlN/JcXrAwuITHWosMp7riRv4QPAtVO3a7WUQT3g9kg7ENzHlTd046OjDE43DJ2dsRaGiuhO4A2/IwRSszZSMpzLHWWm+9bbUr5xJjkyPVIyJ5IWhj4JwwRmntqQVPJWBlSB4EV0bBYkXEVxpmEx3HmvmDI9KQeE3xoRsflTVwC9DPa5H6xPWA4Hk0H/wBw1su9k/T1HQbqVre6o3IrRcxyjYE1E6i3UoXd4i3IAfGqzYtjzP78KwLDT3VG5FaGxy8pNCkts2wJ8hWYsOTAUyN9qxrLTcQbkAPjWlr7EmSffpWrFWmtoXaNATE7wJil9ekdyCeqVRylifkNKaMW+icpqPYxtNe5TQnh/FC9q7cYwFjYRGknzr29xiFzJaz+dwCR3xRcGBZI1YSJ8alLp6Un/Ctjw7X6VK3ty8A92Pk5F0Z0uCuiizpXFsJJPOj+HkMIJEqdieR/zopj0dBxOGpc4tg5BoablwDR3/vb5TQ/FcQvgwLjb84Pzo2ajbiE7LeKt+/jStd29TTOLxZJO+oPupbI0Pn+VKxonuHwsgFgddp0BrbiMFpK+6i1m2DaSfuL8qF4fFiSrGNSAfXn+tcXObba+j0vbxxioy+/sYOBXustg/bGh79Of7763cS49bW5btkB8rDrCNQABoP5iDBPlQa9w65Ba0xBI1AMZge7x8aC2Ac0RBHLaIq0MsckdHNkwzwyV/6Oi4tVe3buNlhxlY7KjAjtabCAZPPMO6qNnCdU5zbgn5mvOj+MZFJEHJLZTyMQSp5eRBrfjL6u2YTy0O+2u1R2tHRSewhwsByT7u4eP77zRy/hLjXLQtDM7LIbtaENoFA1J0maC9G10cEawY9Nfyp76LZBiFzTMQndGUx+XxrQ26FnLirHHg73TZQ3hFyO1pEmdyBsSNY+VeYrg9i4xd7YLHcyRMacjV6pXUtHE9lXBcPtWp6tMsxOpMxtuT31aqVS4xfyW82UtqBAEnY60e2BtRVltXB2IPrXrHSQJ8BGvgJ0pV4vxG2Vyrl6wWWZhpIlRE6byaLdHwz2rd1mJJXXzkifdRcdWKpW6M8WL1xWQ2LeVgVIe8QYIg6KjD41yB8M9k3sMdbmFuF7f81pmEjyzEHyuNXcorlHTax1dxOIRKC9ds3h32nJ/wDyzeoFaIWa+BYgRlB0EFfwNqPdt6U0riCqpeG9pgx8UiHHj2CY8QKRMHNm6bZM5Gie+25kMPDNr5XBTpwy9rHfVe0c0lxkNzYYNBnQnQjmCJrE4RYG/td/jVLo/e+r6o72myj/AKZBNs+g7Pmhq/1ns+Ln86i0dKpoiYVMx7IMAb699bMIoAMADVuXjWNp+0/hHyrXhLvYn8XzNAJvwrdkevzNYYZu0/4vyqYP2B5Vqwc9qQRLHeiY09Im+pbyPyNco+iSQQCe/Ka6f0lYdUR3g0lrgu1A02jWrYnSOXPtl7g9tlwN7NuWO/ko1oFbRhDH0Mkz76cMVhTZwptPBOadO4nxoCbYI0+NGMu2JNVS/R4mOuwPY9UU/EialehBXlGxdnFMEmtMmHsEqMsEjv033/fhS9gx2qauHHapI7Gym1m93AetVMRhiPa3pmvDShONWs0FMHYddCKAMNG8xR4XAG122+NL+IeC48fzNBhQwYP/AISfhX5UuXfabzPzophMaQir1dwwBqFJGlC7g7RPfqPIk1zYlUmdvqJxlGNB7oTjAL4tXrmWwQS0pny/h1GWfd4VY6S4L643rdp0tMBDMBDEaZpGgkRoYOuoofwGzDSwkPpoCTlGpMdxjz3inTDKzW5snONmtnUNyA8D4HxMa1aHpoyk5LT8nNP1c4wUG7XgB9Hl+tHcwijuJ4OUfT2Tt+lXOGcDtv8AWWj1bje22g1OyHlv4jypl+hZkAYaiufJCUHs6sWWE46FbCSlwaedN3Q1nF1EK7EwTAlNZid9KtYTA4VR1jgMyQzKW2XXUr3aGmU4bqUa47s4DBhsMimBkECSBJPrVMcPshlyboMRUiqC8UUhGyuFuRkYjeUzDQSRpyMbVoxnSCzbZVZj2pkxooHNydhyqtMjaC9YugIgia12L4dcyEMDOo8CQfiIrW6sY9sQZ0ZdfA+FAxWxfAcPc9tJPfncfI1oxNxcKihJgtAkzACxAnbb3k0UNw/dPvFCukWHW4baMYEOdP6YoTcuOgNeDUvHLhgrYuONQSht6RHJyKrWOGDFYC7ab/1c5Hg0Aqf7gKxw1u5bRrdvcIz5iIXc7HUTtp3Ci3RpIw6+vzj8qML47N97OM4dybdpn0a2Ww17wyjsE+SEf/DTVwfEkqJ3Gh8wYNDOkOCCY3iFkDR7aYhR4oRmjzFxhWHC7rhc+kNGpYDtDstpvuJ9atBkssdWP2DxIS7buH2Xi239R7BP9fZ/9w0ytYUxoNNRSXhhntNZfRmBhhoRIkHzG4PhTPwLiHX2EuGA0FbgH2biEq4/uB9IpJqmHFK1RaGFUEkSCd9f1rFcJAgMY100+db6lIWK/VFVhR5S3+U1VTC3V1BJ19ksCIjxEiiU1JrAoD8Vwty4sBAdNZI76HcO4UVvI72yInnImDB796apr2mUqVCvGm7BHGlDWXESxIy98yNaVPoTAGQdBppNdBisTaU8hRjOhZ4+Ts5/bwbRv8KlPv0VPuivK3MX2T5PwZlppm4a+opQsXIINM2AfMuZfaG47/LxoxHYevaGKE8UMCrl7EhkRh3EHzH+tCeJ4gRvRZkCeIP2J8RQ7H4eV6wf1frRBwWVgB4+4z+VYYV6QYJcM6QW0sKk3M4TLopPIga89KD4bDDsvc0UKAFO7R4d3zq3hsiGBrEwDsvPX70d3v7qr37xZpAk6STUcGBY3Jr7KZJKlQ1dDrL3Ha7byqbYITP9p3BEdwAWfeKb7loqvW5VTECS2RdSNu0BAYaHxg70J4H0cK4VbpcK6hrjAxrvEGY2A/ymtvRKzfZ1DHNbOuusD7+YGR6HUkcpj1McYqOzzcspOeizisamJVVQdVfWCFB5QJa232xoNNxzpj6M2ngdf7J0nWCBqPwnX3HxEF8RwPDOMuUFzqBzkfaBEQeWbfQSTW3DIeqCXogTnB9rvhsujEk6xv61OUotUkUipJpsUuk/Bri3Fu4ZyXvXIRGYclyhl5FYAEEbEa70Zv8AFMbfXqDbIDdlmKQACwg7aaCqeN4wPp6WUUpCOqtl30Uh05MJHzpj4hctkK5PVl2CMw2DkwMx7iwInxXvqTi10i6lfbPcTxpLXUJB7DZWgGBFlxMxtMe+qfFelVhrdzaQrRPu0r29wZ9+sb3ih9/ofbfVt/SpoYcOF4gPbzqZDNcII1EG4xGvrVlrygwWAPiRSMvQ0ABUvXVA5LccAeQBrw9Dj/zF7/5n/wDKtSDbHtboOzA+RFKhuO73r8g/XNbUFWMLa7OmV1+1mJmd6o/7oN/zOJHlef8A8qP9HuGizY6pWLBXcln1JLnMZJ86WWlo3YPxXEW6guRbyt2JFx1YF+yPq8h5/wA3rR7hNxUsLmIG+/4jQ7iuPsIACouOpBAGwI2OvdNLfGcTi2ymwiduTduXDIQCIAQEFifMDs671P3FVFI4n2ydILFt+IHFdfZS2MObd0OxVhmnKSIiDAgTJgwKTMZxDhttQma9fykkEHqk951O0yAKGcT6MOHtt1/WG/dCElSGzkgTuQRqOekjSKMYbgFixiby5Sy2V6wM2rShTKJ5ZmMaRpNWg9WTmt0W8P04vNBsYNmGwKrcuH+4UY4f0zvqct3DX7My0hSO6WIuCDuJPiKFYbpe9i6bXXQy9klrYylwO0BlBZtZ2XlXvSvpFi+oFzrECsYFxHMsQSCiLusQZJiIii7ESR0nhfHg4UsVKsYW4ojtfddT7J+Bo4K4P/DrjbvffDOSVu27hEkkh0BcGT5Gm/pfx+7Zw1nE22IIudU0E6goWE6jYqf7qDiNyp0dKqVyfg38Um0F0A+eh/uH+dPXCOlmGvwofIx2Vo1/C2zfPwpaGsPVK8Vgdq9oBJUqVKxiVKlSsY+OkNGOC4oqwoKtWcO8GmQrGnGnLJXZ+0B3Nsw8tj76o3MMBDXNSdPwk7enL3VZwGLkQfSe+qmKubqf2P1G3uphUabhAaeR0P5H8vdVAYdhcKiYMkEchufdUa/yO+x8fGr3DHJZSTpDCe/UD5A++gOD8ODmVACSY0G/jHjThhcLYVoEBZ9ptCTtMcgDy5ga0v8AC8ExuswMbhSd94kd5jn4mjODs21bMxEzux117h591VgtkpvR0PBcf+pRlw7MLZ3AygADnO/Zaji28y9ZbVUYrHZInUgiTABGp3+8aXeF8fQZ7cDtrmGbs95gKAW5sNQPYqrhePG5bKBTpKHKFTT1zH5U6gyUpIZuD4u+pbPZuSdQ4KEaA9mA0gT8Sap8W4n15yZjZv2yMrahW5QZ1SeR7iJMGKUB0qxFpwHD5SSdCS0mQ0Fi0DMCYijeJ42LwV2UvaPZZmUC4mYEZWIUaTpNWWJxd0QeS1QXNk3rSOVyX7DhgvewI7A5DPBHcCVopZtBkcEApdCqoOgnRrbeBjTvBUd1JPRnpIbvWYVz9YgIU66oNiTzywD3wD3V0Hgt9msAuAogkmRod/8AvDEmfnpOaaXItBpviGOo08gPgKxGG8aX+E4p1tq2KeMp7KjTNzAIHtEe6aL4XiCdUrZcighQGOwOi7GNyB61zyxtdHRHImW/o47zWu+ltAWd4AEkkxA76rf7ct6LzOcTyBViup84rnXHeM4rFvfswBbthypAIJAZcpJnWe/xpoYXJ70gTypddjtxrpDZw1oXATczLK+PdI399KtjpdevWnuMpS2mpCGIU6Se8eO2te9HsGr4cW7pNy4g0USTpsI5aQP6t6WOk/Sa5hrl3DW7aiBFzNDKMy6qwGhMHUTz3maeeOCi4vvyLGc3JSXRvwfS9bjwltnGYKMskljMDUCZAJ05AzT7wbhfWrnuEhH1ygkEFGkEsN/Z2j31xborwhziVt3OttMRIUFrbkRuCY7MSZ2ia7T0c4UqiAbhRdBmuO0kb6Me+Rt31yxxRWzollk2CukiPd4tg8ttzZtDMzhGKBirES4GUQQtaeL4fLcK87+IUH/p2e18Sx9wp7u38i8hESSxiBvpFLWL6Y4ZLnV3wIOqyJIHew+zPLn6RNESZz3ifQrEhX6o2rxZsxYjJd5yDmMMDO0jwilvpJj1ZltofqrC5EjYnd3/AKnk+UV1/pB1dzDXPor5bjKQoLGDO8E6qSJg7TFcKTBvdu9SqtnnLly65tssbzOlHoyaYw/w9bLevYptEsWXj8d6baAemc/003cawOIxHD8PatEB3uG8+YxCQyryO5PLuNBlwiApw+2wFqyetxd0HslwO0AeaqOyO8z304JxJbOIsriENsYlZw/OFtgBbLggZWhg3PW4RvRSFe5C3Y/h5ierGZ7RfxLe6QoO3jVd+jGKsBmZYQAk9oMsDy1B9K6zbuhtiD++6gnSzFJ1N20zhPqrhY7lRljNl5gTNGhxX6NdOLiBczG5bIBB+2B6+0PA++uocH41bvqGVgf3sRyNfP2Cxxv2FQW8tux1SI5jM2sEkbAwOW07mm3AWr+FAvJcUDQEMwAMmAIcif7vIUjiC6O0GqmOv3EAK22ubyFZQR3QG399K/Cem6HsX1NthEnUgeJBAZfMiPGmzD4tHAZWBB2IMilqhrsFNxsjfC4qfC0p+IepRvMKlCwU/J8dVstmtdZLRCEcJeg1uxtydf34j1qhaarDCRFEUH4htZo5wlQ6BTsEu685ifnB9fClu+xGh8qM8MvZbiGey0A6kRI8PHlWht7Gl0WrWPKEDYjfmZ+Q9fdWnHXmJzAx4g6kHvO58tqx4thGS7rOpO+5IMfEQfWiGFwwKgkgDvPd4Vbpku0bujeMysuYeyRPlO0eMsP6hTrhcDb64MrHLcAI0yiYkT5jx5UmYe6ltpCggaMTzGx8pHnTDh8Z11lrTElk7Vthpz1jnEw0fz1W5EmkNWM4ZbXtF1HPRZ5doEzrIAP9LVb4Zcw+VlVUMqQQTOYHll1mlrh17EPaORlYEaqVO+2UkaidvWrvBujvaLPhyoJBHLQ6z3jQ++POqqPx+TOeUql8V2BuC4JBxVRbBBXMSG7OhlRJgzvFdZxNkgNbgZGIHo6nNpy2oNh+BYcuGtZ+sTe4WzFV36uTuCdY128qLX76g2u0XknuMmIG345qE5cno6YKlsQuHs73Gt3Z6sM3VmZJGYlY8YMabR5we6SXVXCtac9rICYntdhtBGxBy+4egrpLilwl8oyGWRWRgdBMg9neZU6/Kl5+K3LiM9y/aEtEFhmKqNsvIE76CfCaflF7voHCS+ux36OD6tXysT1kEtp7SCZnU9oDlzoVjr6Jib6vcVEKLovgzAAEa8hsKHYTpelu0LcdYwIMlwqyGkdkCTsO6gHSXj+cm9eYL3KugnuHM+pqMsit0Vjj0rLV7itxnFvDTbVmA0MMxJ0kjb96mgnEuHsXVFzXLt247QBLNDbx4kz6GvOhPGlucQw6tlCl9iZM5TG9OH8SOIfQm6vDKlnrQS96e3rqUUnVBpuPSp8m+x+NdF7gFnquxisUXxDSG+s6w2ARItgkkBiYY/hjXm92ciIMpAVQAIOwAgTXzpwQu12FfIDrncMFJ8THPxrqXRvA3rluMTmZCwFtEfS5G7sy6i2oMkg67DuItBphLpBx5crFGWFMNcYxbtnun7b9yqCfDnVToHw3C3kOJZC7F2Cvc9o5dC4TUW5aYEkwNSZgU+M9C2xbBvpZVUJVbbWQLaAf4aowCjzk+NUOC8Kx2BvEDEWGwYJNy45yohESoQksH10Ckg84oKaekFwa7HvpBwlri9gfWAdhu/8Akbw7u6uacZuW8PdZcMA2OuKRfuh8yWdwShI7L5IUnYQY1Jm90n6fPeDWsKxt2ho+IbQkcxbHL5/OlHCoHU5QUsbsT/xLx8+Q+A8TrTrwTaSdjn/D7o+L0GD9GttLsR//AEXV2H/TU795074o/wAaOMBsTh7dsy+HltNYuuUZRpzUKpjnnXxon0e44Gtm2jmwwhYt5V7OwK5gyzpElSfETQzH8DUcRwl9APo9vKbgcksHD3H6xy05szlSXkyaDTDFqixwzohkTruIYvEHEsMwtpdK5CdQGYbnwEKNtd6F8TvDD/SvpLNcW9YXIZl2zMyMuY9xAM9x8KP8X4kWZ8qy7MIYt7MH7IA7vGkDphxO3euG3DPCpbt5D9oOxc85lmyAAbqfCWekZbYe4Ol5sDh0bDLaQ3LfVPPbvL1gLMw7oOhgTM1o/iFxYG4mGQ6WhLGR/wAQjQdoEaKTvoc5FN93G3bjYNbuGOHa2Cercgyq2ysgL7IkjQ6gignG+gyX7jXcMzdYxZmQtIJYycrHYTyOnlQ+ggLhvFlVQl1WTKJzhWKppvcsTns/jtHLPI0x8Jxl1cz2LgMZSeruIwOaSCCIV9jowRhGtK97heMfFpYuM5vEhAGuOMkDRlZc2SFEyAVMHSuqcI6GrZw6qlwOxlnbKoDsY1yoIXQAc6CYGiinT68ohltyN5ZkPqpXSvatNwG8Doh9GEemtSjSFs+fZr0GrHEcE1m69p/aQwY8gdPQ1XqZQ2oat2WmqANWcO+v73/elEDNWOtgMrnaRm8v9KNY/gxUEJ2lgMCCNM0aHw8fWqmJshlPcRVzozjCAbb3GWJjmJ0ADcwNZ9Ip4d0BvRPpwuWcjAC7bg5juQBl98Zf7TVTC4udD8fh+/CjZ4G1yWAEgmDpzHM93hrQa3gCr68jB10/U/CqUJZiwZm5n8o59wEV1HoR0clVuvqYBHcYGUgE+3KZdtN+1pSx/sy31YuBgI3n2QR/L+Zk+NGuCdJMWSESMogZ3B7MaTHPTTxB0qsW+NInJK7Z0XB4S1h2OwB7SaDnuFUaD0Gs1hjbd1yd0t84MMwiYn7A0PjBG0VVw2IUAZ2l2JhtGYOdez3KZGug1BMSaoY/jr3Ua2CMwkEDUKy7HX2jzE6eB0NJGMmzSlFIKWOM2rYFsAgECI5ifaA7vE78pGtTgdtQ4Q3Osh2dSScwUxpB7tAfMbSKRMHjcUt6TBBYgyJOae0FnU/eHgw510CxiWADC2guDQGNpMkepGv51TJBRVR+yeKbk/l9C7/F/DsPo90AmesQxy9llH/dXKWs3ZJHyNdz6ecJfGWUW26iHV8zTGXKwOwM+0IpXw/QjDIJvX7lw/yxbX3don31wvR6CdnM1s3JBPIjlV/BY+7acuoUyAO0ASACT2SdpMT+Ed1dQwnRbhmxtMx/mu3R8iBRbD9CuFtth9fG7e/86FmOR3+kmJZcpJjwKj/tAptvcVwmOspaxvYuAHqsQg0OkEg65W11U7H0NOn+6/CVJXqbEjcFixHmCxI9axxPAsCA1pMJaUHc5YmNiIIkjvB5+dMk/AraEfgnQey1wD6XbupMlbftss7RJy+J1pq4rxW3aVrdtTyQZRlVFUaIpj9k+Aohg8RYtDqVypMwiADwJCqOXf76U+M4lVfLcIBzEeR5z3a99T9Q5R0ivplGbbf0Z4TpI47KiAOR7VZ3uH8PxDhb1hwJJAW7cW2CxkkW1cKDJJ0A3oUMqHYnx2EetWMNiEzCQCJGmaT7vyrmUmumdjxxfaLGJ6C8PkiXn7AL5lU8uzzHhNc54hjCGIJBKkjTbQxp4Vc6V4sXMTcNt2FuQFhmiMonSY3mhaYNCPab4fpXZib+zgyqN6KrYjcEmCIMb+Y8QdR4gUR4X0qvWYS79ag7/aHiDz89D40KxeFK6gyPjXuFuW3Qq5ykeyfDu9/zp2yaQ9K1nE2wVdlVtwrBCe8Zo08YynxNCcPwZ8LjbGKK9YiZZCWnBBVCqxbUMRyPdNX+Brh+oS1qtwCc4+0W7Wo57x3wN6xbEOpKFjHcCYPj4ij2AJ9I+Pm5cvYgArksrbSSOy13keRIyA6VZ6GbxZuKHyjJbYkByMpORgCAwUxlPMiaSeIYC7ftZrZWSzOVJPbAEJHKcg28aDA3rNnMQy5gwB2iWTMPAwo8YoNho75iMaGt9Y1qLqkpJQB0JHaGoOXT0MjcGa1cMxjKZSY5jkefP18fOl/+EuMjCmxcTsgZyxOhNwlipnYgRr8opl4nwzIrNbkoQdhJWe8e74HSJJi10Bxa2EDxu19pDPONq8qlZFtFCMmZgNT4nUj029Klal4BZyr+J/C9beLUe19Xc8GE5T8CPRaQxXdukHDFv2rtg7XFJU9zjUH0IB9DXC7tsqxVhDKSCO4gwR7xQmtgxvVGNZoa11AaQoF8M+YR+/P1+Y8arXLRkkbxHxrXhrsH97Vcu66j/WmQGbsBjboAHtjTeXBgcw0j4VqudaXYyde8bn8qmBVpJU7+nyrZcxF0NoWO/f8A61emydpBXgl0KYvTtpn0A5TH50UxvGltrC7ndo3jYquk+ZgeJrdf4SbuHtW3IXq0zFkVnuIzDMVJHiTPKku6pDG2zAkcwZkeME0yfEVrkNfDuONcBUtAMK0mSyzoWPPKx2EAB9tKbcLaaQ7asBlcffWYW4fEbH39wrnXDcJBDhoH3j8o+BH5U88DxwYQn2B7R1JB0KHv2I8ipmquVrRHjXYzXLdu2jXXZc8DXkANjHhrtyJ9FfDcdu/SEUSJfLl5kz8y2keNXeHsScsyonJ+HmhnmNj6corFeFtYunEEAOFJtg69VaUa3bg+8VGRRMnc6nstDjBPltvonNSm1x1XY29IONjDWZCZ0VQtwLuB7IKDYkZSYMezoeVe4C1ZugMJdSAVfZSGGhHf5HYiufYXj+IOIS3m9lS1yQDNxoLA9+VruUd3VmtVnjT23u5Jjs3AoaBLFg4A/Ehb1NR/HtpF/fpNnQsCptYk2XuB7dy2zIWRQ6OpErIGoIJ8stVeJ8VOHuKxYm0xKOIkqZjMJ3AIPuoZwTiPX3rJ1kW7j7zvkT4sGNAeld66L7KQ5Rsx0nQ9dd191Pjw/NxYmTN8VJDT0jvh7S3bTDOslCJ1KjaT9lhKkcww7qscOxyXsNbuLIVgs6nMNQIJ32lSeeSlViwwxENEggNIiZOk1n/CoFrFy0x7OZxpB3IIGmg3fePaoPHUf4Cp2xqXF4exJAEic+WJn+dyYBP8xEzSt0yxaMwuhQQ5gkbZgIIkgd07d9CuLWbjv2myoCQpY8pA7I2A0GwqlxzFKoNgMSAqEE6y4kgjuGU5fU1L1OPG4d7LemyZIz0tGjEcaFg5CX0g5YkEEcjtHiDQfH9LuyRa6xLh0BIUBddSDJJMaDzmrcLft9W/tL7Dc/Kk/illkfKw1Hx8RXF7UUdrzSZf4NfkG0dxqvlzH5++rq3Sppds3irBhuDNMTMHUMOYmqEyXblB8WMpMbUQdtKo4lpEUzYtB/AYo6d+lEeIXS1uR7QET4HSfTf30u2Wg0cwj5lI7xWTA0a8PigWNljAhcneraAEEKTz17okc5OWovW+qvoGDCQRqrrydGG/ptPcdVPGYcsuddHXeDuBvHcR8RPre6J425exSWM5FoLC2+syopFsAuA0rmCKxmCT40UwNHSsBw5LmEdQzJIcZkMEabeVD+iWOxtm3csPdDKsC25EsF17O+o85jyiNXD8a1tDDB1YPlcEFbijQ7aBhzHKe465Ydw9t8pjMCPIkEfnR4q7C8suHC9FJ+mcEjrC0E65V18ROpBqUr43BXEdlVHIB0IRjPjppUrCUjrGHu9bbQrvIIPzn0+dcX6Z4qzdxd1rIOWYJOmZwSGYDkNI9JqVKOQTEtgSpXlSpFjNGq/hnnT3fpUqUUZlzg5i8ogNOkHn4eBp5t/R8pNsMrgEwezBkEaW4UnTepUrpxdEci2BHsX7xcM/ZDEkkk6sAfE7Uv3OCNm0afLTUaH4ipUp5b7FWjdcwzBZDyRyM+utbuBcXdJXxnNPs7T/AEnmB3A7ipUoY3TDkSaOp8EW2LJuZdQVbKebn2CTyAnQep1gCcPxIWxiLl9jcuPLE6j6tNlBGwkx39odxNSpTVct+ROo6BnBeCDLmLTcYqzkqD2mbO2qwT2m76oXeDdkXJAzOxGp9mWgbae0eZ3qVKdSfIm4riNXRLBW7UXfvJAgsOwHaNJPMsfWtXSW7YN7KLYuMR3AASxMkt58qlSlW5uTHkkoJIpcWv3FsAJaVc4PsEDke8Cl7EcbfBKcMiZWGhYtzMEmF3PrpUqVDLNxVIriim9i5j+JMwLsSW76HDFlismY0+NSpXMnZ00ZtcKNIr3HIt0ZX/pbmD3eIqVKIBYv2CjFTuKtcMxmXsHY7eB/zqVKAS9eqheNSpRAXbVyRNE+G3dYqVKxmbAYZvxH5mhuLtm2zvblQdHg/fERHcROn+VSpRFQT4NxcICYPVSovWxpkJkLes8lO4K7bj2Tow2r7WXK6HRTpsysJVgDtI5HUVKlNEEuwn1wbtDnUqVKoTP/2Q=="
                    style="width: 150px"/>
                </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-actions>
                <q-btn flat color="primary">
                Ler agora
                </q-btn> 
                <q-btn flat round color="primary" icon="share"/>
            </q-card-actions>
        </q-card>
    </div>



    <!-- Noticia 2 -->
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                    <div class="text-h5 q-mt-sm q-mb-xs">Exames de Rotina</div>
                    <div class="text-caption text-grey">
                        Dicas de como se organizar para exames de rotina.
                    </div>
                </q-card-section>

                <q-card-section class="col-7 flex flex-center">
                <q-img
                    class="rounded-borders"
                    src="https://uploads.metropoles.com/wp-content/uploads/2019/01/24092950/exame-de-sangue.jpg"
                    style="width: 150px"/>
                </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-actions>
                <q-btn flat color="primary">
                Ler agora
                </q-btn> 
                <q-btn flat round color="primary" icon="share"/>
            </q-card-actions>
        </q-card>
    </div>







    <!-- Espaço para o final de página -->
    <div class="row q-mt-lg">
        <div class="col-12 q-mt-lg">
            <div class="q-mt-lg"></div>
        </div>
    </div>



  </q-page>
</template>

<script>
export default {
    name: 'PageSuaSaude',
}
</script>
