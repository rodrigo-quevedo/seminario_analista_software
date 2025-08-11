# Orchestrators

Cuando hay mucha lógica en un controller, puede convenir agrupar toda la lógica relacionada en un "service orchestrator". Este orquestador de servicios va a ir llamando a los distintos services, dependiendo de la lógica del controller.


El objetivo principal es que el controller sea lo más breve posible.