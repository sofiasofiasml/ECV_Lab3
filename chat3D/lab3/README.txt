Email: paula.garzolio01@estudiant.upf.edu
NIA: 216911
Email: sofia.martinez02@estudiant.upf.edu
NIA: 194770

Vídeo   https://youtu.be/z6ADPUgcE0I 


Para arrancar el servidor es necesario ejecutar el archivo myserver2.js con node.
Nuestro juego se encuentra en el siguiente link https://ecv-etic.upf.edu/students/2022/sofiaula1012UPF!/lab3/index.html

Una vez el servidor ya esta en marcha el usuario puede entrar en la web e iniciar sesión. En caso de no tener cuenta, también puede registrarse como nuevo usuario. Para ello, hemos usado MongoDB.
Desde el servidor, gestionamos si la contraseña es incorrecta, si el usuario no existe y si cuando nos registramos, estamos usando un username que ya existe.

Esta aplicación es un museo en 3D en el que el usuario puede acceder a diferentes habitaciones, que representan  tres ciudades distintas (Roma, Egipto y París).
La idea de este juego es que el usuario pueda visualizar modelos 3D de monumentos de ciudades emblematicas del mundo y poder interactuar con ellas mientras se puede comunicar con otros usuarios.
El personaje puede moverse por el mundo usando las teclas WASD usando distintas animaciones que representan cuando el personaje camina y cuando esta parado. Además también puede enviar mensajes a 
otros usuarios utilizando primero el botón "Ocultar Escribiendo" y posteriormente la tecla enter. 
Hemos utilizado diferentes APIS:
- Routing(LEAFLET) + plugging RoutingMachine: Para poder mostrarle al usuario el mapa de los diferentes países del mundo y crear una ruta desde su geolocalización hasta las distintas ciudades. En caso
de no encontrar la geolocalización del usuario está como ciudad predefinida Barcelona.
- SpeechSynthesis: El usuario puede acceder a información de cada monumento pulsando el botón de información (modelo3D en forma de información). Esta descripción está en formato escrito pero también puede
escucharla en español.

El usuario puede interactuar con otros usuarios del mundo enviando mensajes y recibiendolos. Cuando el usuario envia/recibe un mensaje, este aparece en formato "bocadillo" en la parte superior de la pantalla
y desaparece a los 8 segundos.

Como proyecto futuro, nuestro objetivo es que el usuario pueda ser participe del museo añadiendo sus propias creaciones y mostrarlas al mundo.

