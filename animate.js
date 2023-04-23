

$(document).ready(
    function () {



        $('.banner-image').addClass('animate__animated animate__fadeInLeft')
        $('.banner-heading').addClass('animate__animated animate__fadeInRight')

        $('nav').addClass('animate__animated animate__fadeInDown')

        $('.banner-heading').waypoint(function () {
            $('nav').addClass('opacity-nav');
        })





        $('.wave-img').addClass('animate__animated animate__fadeInUp')




        // service start---------------------------------
        $(".service-heading").waypoint(function () {
            $(".service-heading").addClass("animate__animated animate__fadeInUp");

        }, { offset: "80%" })

        $(".solution-heading").waypoint(function () {
            $(".solution-heading").addClass("animate__animated animate__fadeInUp");

        }, { offset: "80%" })


        $(".card1").waypoint(function () {
            $('.card1').addClass("animate__animated animate__zoomIn");
        }, { offset: "80%" })

        $(".card2").waypoint(function () {
            $('.card2').addClass("animate__animated animate__zoomIn");
        }, { offset: "80%" })
        $(".card3").waypoint(function () {
            $('.card3').addClass("animate__animated animate__zoomIn");
        }, { offset: "80%" })



        $(".card4").waypoint(function () {
            $('.card4').addClass("animate__animated animate__zoomIn");
        }, { offset: "80%" })
        $(".card5").waypoint(function () {
            $('.card5').addClass("animate__animated animate__zoomIn");
        }, { offset: "80%" })
        $(".card6").waypoint(function () {
            $('.card6').addClass("animate__animated animate__zoomIn");
        }, { offset: "80%" })




        $(".card7").waypoint(function () {
            $('.card7').addClass("animate__animated animate__zoomIn");
        }, { offset: "80%" })
        $(".card8").waypoint(function () {
            $('.card8').addClass("animate__animated animate__zoomIn");
        }, { offset: "80%" })
        $(".card9").waypoint(function () {
            $('.card9').addClass("animate__animated animate__zoomIn");
        }, { offset: "80%" })
        // service end---------------------------------


        //about start---------------

        // $(".about-heading").waypoint(function () {
        //     $(".about-heading").addClass("animate__animated animate__fadeInUp");

        // }, { offset: "80%" })

        // $(".who-heading").waypoint(function () {
        //     $(".who-heading").addClass("animate__animated animate__fadeInUp");

        // }, { offset: "80%" })



        // $(".para-container").waypoint(function () {

        //     $(".para-container").addClass('animate__animated animate__fadeInUp')
        // }, { offset: "80%" });



        // $('.achivement-container').waypoint(function () {
        //     $('.achivement-container').addClass('animate__animated animate__zoomInUp')
        // }, { offset: "80%" })
        //about start---------------







        //ourwork start---------------
        $('.ourwork-heading-container').waypoint(function () {
            $('.ourwork-heading-container').addClass('animate__animated animate__fadeInUp')
        }, { offset: "80%" })





        // $('.ourwork-container-card1').waypoint(function () {
        //     $('.ourwork-container-card1').addClass('animate__animated animate__bounceIn')
        // }, { offset: "60%" })
        // $('.ourwork-container-card2').waypoint(function () {
        //     $('.ourwork-container-card2').addClass('animate__animated animate__bounceIn')
        // }, { offset: "60%" })
        // $('.ourwork-container-card3').waypoint(function () {
        //     $('.ourwork-container-card3').addClass('animate__animated animate__bounceIn')
        // }, { offset: "60%" })
        // $('.ourwork-container-card4').waypoint(function () {
        //     $('.ourwork-container-card4').addClass('animate__animated animate__bounceIn')
        // }, { offset: "60%" })
        //ourwork end-----------------





        // //ourblog start-----------------

        // $('.ourblog-heading-container').waypoint(function () {
        //     $('.ourblog-heading-container').addClass('animate__animated animate__fadeInUp ')
        // }, { offset: '80%' })




        // $('.ourblog-card1').waypoint(function () {
        //     $('.ourblog-card1').addClass('animate__animated animate__backInLeft ')
        // }, { offset: '80%' })

        // $('.ourblog-card2').waypoint(function () {
        //     $('.ourblog-card2').addClass('animate__animated animate__backInUp ')
        // }, { offset: '80%' })

        // $('.ourblog-card3').waypoint(function () {
        //     $('.ourblog-card3').addClass('animate__animated animate__backInRight ')
        // }, { offset: '80%' })




        // //ourblog end-----------------

        // //brand start -------------
        // $('.brand-banner').waypoint(function () {
        //     $('.brand-banner').addClass('animate__animated animate__fadeInLeft')
        // }, { offset: "70%" })
        // $('.brand-image-container').waypoint(function () {
        //     $('.brand-image-container').addClass('animate__animated animate__fadeInRight')
        // }, { offset: "50%" })



        // //brand end----------------




        // //Testimonial start ------------
        // $('.testimonial-heading-container').waypoint(function () {
        //     $('.testimonial-heading-container').addClass('animate__animated animate__fadeInUp')
        // }, { offset: "70%" })

        // $('.review').waypoint(function () {
        //     $('.review').addClass('animate__animated animate__zoomIn')
        // }, { offset: '70%' })


        // //Testimonial end --------------




        // // footer-------------------

        // $('.footer-bg').waypoint(
        //     function () {

        //         $('.footer-bg').addClass('animate__animated animate__bounceInUp')

        //     }, { offset: "50%" }
        // )

        // $('.footer-bg').waypoint(
        //     function () {


        //         $('.logo-icon-container').addClass('animate__animated animate__bounceInDown')
        //         $('.social-links').addClass('animate__animated animate__bounceInRight')
        //         $('.about-container').addClass('animate__animated animate__fadeInUp')
        //         $('.footer-link').addClass('animate__animated animate__fadeInUp')
        //         $('.copy').addClass('animate__animated animate__bounceInUp')

        //         $('.privacy').addClass('animate__animated animate__bounceInUp')


        //         $('hr').addClass('animate__animated animate__bounceInLeft')
        //     }, { offset: "20%" }
        // )


    }
)




