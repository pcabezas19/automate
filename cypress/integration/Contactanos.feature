Feature: Contactanos

    Background:
        Given Un usuario haya cliqueado en Contactanos

    Scenario: Agendar meet
        When selecciona el icono de "calendario"
        Then aparece un calendar para agendar una meeting con el team comercial

