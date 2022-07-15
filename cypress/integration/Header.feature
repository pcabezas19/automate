Feature: Header

    Background:
        Given un usuario se encuantra en landing page

    Scenario: Header - Sobre nosotros
        When cliquea en "Sobre Nosotros"
        Then la página ingresa a la sección de Sobre nosotros

    Scenario: Header - Tecnologías
        When cliquea en "Tecnologías"
        Then la página ingresa a la sección de Tecnologías

    Scenario: Header - Qué hacemos
        When cliquea en "Que hacemos"
        Then la página ingresa a la sección Que hacemos

    Scenario: Header - Convertite en Steplixer
        When cliquea en "Convertite en Steplixer"
        Then ingresa a la página Convertite en Steplixer

    Scenario: Header - Contactanos
        When cliquea en Contactanos
        Then ingresa a la página Contactanos

    Scenario: Header - Language
        When cliquea en el icono de idioma
        Then cambia el idioma de la pagina

