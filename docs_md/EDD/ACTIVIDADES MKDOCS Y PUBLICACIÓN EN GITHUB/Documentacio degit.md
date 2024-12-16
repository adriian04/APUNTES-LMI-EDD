alumne@CF-TTL-06:~$ git config --global user.name "AdiranB DAM" ''' Configuro mi nombre de usuario global para Git.

alumne@CF-TTL-06:~$ git config --global user.email adrianbarbosa.dam.ieseljust@gmail.com ''' Establezco mi correo electrónico global para asociarlo con mis commits.

alumne@CF-TTL-06:~$ git config --global core.editor vim '''Defino que el editor de texto por defecto para Git sea Vim.

alumne@CF-TTL-06:~$ git config --global color.ui true '''Activo los colores en la interfaz de Git para distinguir mejor la información.

alumne@CF-TTL-06:~$ git config --global core.autocrlf true ''' Configuro el manejo automático de saltos de línea entre sistemas.

alumne@CF-TTL-06:~$ git config --list ''' # Verifico todas las configuraciones globales de Git.
init.defaultbranch=main
user.email=adrianbarbosa.dam.ieseljust@gmail.com
user.name=AdiranB DAM
core.editor=vim
core.autocrlf=true
color.ui=true


alumne@CF-TTL-06:~$ mkdir projecte ''' Creo un directorio llamado projecte para mi proyecto.

alumne@CF-TTL-06:~$ cd projecte/ ''' Entro al directorio

alumne@CF-TTL-06:~/projecte$ git init ''' Inicializo un repositorio vacío de Git en mi carpeta actual.
Inicializado repositorio Git vacío en /home/alumne/projecte/.git/

alumne@CF-TTL-06:~/projecte$ git status ''' Compruebo el estado del repositorio, veo que aún no hay archivos rastreados ni commits.
En la rama main

No hay commits todavía

no hay nada para confirmar (crea/copia archivos y usa "git add" para hacerles seguimiento)

alumne@CF-TTL-06:~/projecte$ touch ficher1.txt ''' Creo un archivo vacío llamado "ficher1.txt".

alumne@CF-TTL-06:~/projecte$ git status ''' Compruebo el estado del repositorio, veo que aún no hay archivos rastreados ni commits.

En la rama main

No hay commits todavía

Archivos sin seguimiento:
  (usa "git add <archivo>..." para incluirlo a lo que será confirmado)
        ficher1.txt

no hay nada agregado al commit pero hay archivos sin seguimiento presentes (usa "git add" para hacerles seguimiento)

alumne@CF-TTL-06:~/projecte$ git add ficher1.txt ''' Pujar ficher1.txt
alumne@CF-TTL-06:~/projecte$ git status ''' Fem un git status
En la rama main

No hay commits todavía

Cambios a ser confirmados:
  (usa "git rm --cached <archivo>..." para sacar del área de stage)
        nuevos archivos: ficher1.txt

alumne@CF-TTL-06:~/projecte$ git commit -m "Afegint el primer comit" '''Fem un comit afegint un comentari.

[main (commit-raíz) 0aef075] Afegint el primer comit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 ficher1.txt

alumne@CF-TTL-06:~/projecte$ git status ''' Fem un git status per a vore el stat
En la rama main
nada para hacer commit, el árbol de trabajo está limpio
alumne@CF-TTL-06:~/projecte$ git log
commit 0aef075dd00fee914d15cc160afa3865d2c927a5 (HEAD -> main)
Author: AdiranB DAM <adrianbarbosa.dam.ieseljust@gmail.com>
Date:   Mon Dec 16 09:17:03 2024 +0100

    Afegint el primer comit


alumne@CF-TTL-06:~/projecte$ nano ficher1.txt ''' Modifiquem el ficher1.txt

alumne@CF-TTL-06:~/projecte$ git add ficher1.txt '''Pujem el ficher modificat
warning: in the working copy of 'ficher1.txt', LF will be replaced by CRLF the next time Git touches it

alumne@CF-TTL-06:~/projecte$ git commit -m "modificar fichero1.txt" ''' Fem un git commit en comentari per a pujaro a github.

[main 9f5f272] modificar fichero1.txt
 1 file changed, 1 insertion(+)
alumne@CF-TTL-06:~/projecte$ git commit -a -m "modificar fichero1.txt"
En la rama main
nada para hacer commit, el árbol de trabajo está limpio

alumne@CF-TTL-06:~/projecte$ touch tmp1.md ''' Creamos tmp1.md
alumne@CF-TTL-06:~/projecte$ touch tmp2.md ''' Creamos tmp2.md

alumne@CF-TTL-06:~/projecte$ git status ''' Fem un git status per a vore el stat
En la rama main
Archivos sin seguimiento:
  (usa "git add <archivo>..." para incluirlo a lo que será confirmado)
        tmp1.md
        tmp2.md

no hay nada agregado al commit pero hay archivos sin seguimiento presentes (usa "git add" para hacerles seguimiento)


alumne@CF-TTL-06:~/projecte$ git add . ''' Añado todos los archivos y cambios al área de preparación (stage).

alumne@CF-TTL-06:~/projecte$ git status ''' Fem un git status per a vore el stat
En la rama main
Cambios a ser confirmados:
  (usa "git restore --staged <archivo>..." para sacar del área de stage)
        nuevos archivos: tmp1.md
        nuevos archivos: tmp2.md

alumne@CF-TTL-06:~/projecte$ git commit -a -m "Afegim dis fichers de prova" ''' Intento hacer un commit directo para los archivos modificados y rastreados.

[main 5292e64] Afegim dis fichers de prova
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 tmp1.md
 create mode 100644 tmp2.md

alumne@CF-TTL-06:~/projecte$ rm tmp1.md ''' Borrem el tmp1.md
alumne@CF-TTL-06:~/projecte$ git status ''' Fem un git status per a vore el stat
En la rama main
Cambios no rastreados para el commit:
  (usa "git add/rm <archivo>..." para actualizar a lo que se le va a hacer commit)
  (usa "git restore <archivo>..." para descartar los cambios en el directorio de trabajo)
        borrados:        tmp1.md

sin cambios agregados al commit (usa "git add" y/o "git commit -a")

alumne@CF-TTL-06:~/projecte$ git add tmp1.md ''' Pujem el canvit de tmp1.md
alumne@CF-TTL-06:~/projecte$ git status '' Fem un git status per a vore el stat
En la rama main
Cambios a ser confirmados:
  (usa "git restore --staged <archivo>..." para sacar del área de stage)
        borrados:        tmp1.md


alumne@CF-TTL-06:~/projecte$ git commit -m "Eliminant tmp1.md" ''' Heu puje a git en un comentari
[main cfb19dc] Eliminant tmp1.md
 1 file changed, 0 insertions(+), 0 deletions(-)
 delete mode 100644 tmp1.md

alumne@CF-TTL-06:~/projecte$ git status '' Fem un git status per a vore el stat
En la rama main
nada para hacer commit, el árbol de trabajo está limpio

alumne@CF-TTL-06:~/projecte$ git rm tmp2.md ''' Borre tmp2.md
rm 'tmp2.md'
alumne@CF-TTL-06:~/projecte$ git status ''' Fem un git status per a vore el stat
En la rama main
Cambios a ser confirmados:
  (usa "git restore --staged <archivo>..." para sacar del área de stage)
        borrados:        tmp2.md

alumne@CF-TTL-06:~/projecte$ git commit -m "Eliminant tmp2.md" ''' Heu puje a git en un comentari
[main c17e28d] Eliminant tmp2.md
 1 file changed, 0 insertions(+), 0 deletions(-)
 delete mode 100644 tmp2.md

alumne@CF-TTL-06:~/projecte$ touch tmp_mv.md ''' Cree tmp_mv.md
alumne@CF-TTL-06:~/projecte$ git add tmp_mv.md ''' Puje tmp_mv_md
alumne@CF-TTL-06:~/projecte$ git commit -m "creat tmp_mv.md" ''' Heu puje a git en un comentari
[main 376c65d] creat tmp_mv.md
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 tmp_mv.md

alumne@CF-TTL-06:~/projecte$ mv tmp_mv.md tmp_mv_1.md ''' Renombo el archivo
alumne@CF-TTL-06:~/projecte$ git status ''' Fem un git status per a vore el stat
En la rama main
Cambios no rastreados para el commit:
  (usa "git add/rm <archivo>..." para actualizar a lo que se le va a hacer commit)
  (usa "git restore <archivo>..." para descartar los cambios en el directorio de trabajo)
        borrados:        tmp_mv.md

Archivos sin seguimiento:
  (usa "git add <archivo>..." para incluirlo a lo que será confirmado)
        tmp_mv_1.md

sin cambios agregados al commit (usa "git add" y/o "git commit -a")


alumne@CF-TTL-06:~/projecte$ git add tmp_mv.md ''' Puje els cambits
alumne@CF-TTL-06:~/projecte$ git add tmp_mv_1.md ''' Puje els cambits
alumne@CF-TTL-06:~/projecte$ git status ''' Fem un git status per a vore el stat
En la rama main
Cambios a ser confirmados:
  (usa "git restore --staged <archivo>..." para sacar del área de stage)
        renombrados:     tmp_mv.md -> tmp_mv_1.md


alumne@CF-TTL-06:~/projecte$ git commit -m "Renomenat tmp_mv.md a tmp_mv_1.md" ''' Heu puje a git amb un comentari

[main 52e6f25] Renomenat tmp_mv.md a tmp_mv_1.md
 1 file changed, 0 insertions(+), 0 deletions(-)
 rename tmp_mv.md => tmp_mv_1.md (100%)

alumne@CF-TTL-06:~/projecte$ git mv tmp_mv_1.md tmp_mv_2.md ''' Cambie el nom de archiu
alumne@CF-TTL-06:~/projecte$ git status ''' Fem un git status per a vore el stat
En la rama main
Cambios a ser confirmados:
  (usa "git restore --staged <archivo>..." para sacar del área de stage)
        renombrados:     tmp_mv_1.md -> tmp_mv_2.md

alumne@CF-TTL-06:~/projecte$ git commit -m "Renomenat tmp_mv_1.md a tmp_mv_1.md" ''' Heu puje a git amb un comentari

[main 6c611ad] Renomenat tmp_mv_1.md a tmp_mv_1.md
 1 file changed, 0 insertions(+), 0 deletions(-)
 rename tmp_mv_1.md => tmp_mv_2.md (100%)

alumne@CF-TTL-06:~/projecte$ echo "Prova per desfer canvis" >> tmp_mv_2.md ''' Fem un echo per a modificar tmp_mv_2.md

alumne@CF-TTL-06:~/projecte$ git status ''' Fem un git status per a vore el stat
En la rama main
Cambios no rastreados para el commit:
  (usa "git add <archivo>..." para actualizar lo que será confirmado)
  (usa "git restore <archivo>..." para descartar los cambios en el directorio de trabajo)
        modificados:     tmp_mv_2.md

sin cambios agregados al commit (usa "git add" y/o "git commit -a")

alumne@CF-TTL-06:~/projecte$ git restore tmp_mv_2.md ''' Descarto cambios de tmp_mv_2.md
alumne@CF-TTL-06:~/projecte$ git status ''' Realizamios un git status
En la rama main
nada para hacer commit, el árbol de trabajo está limpio

alumne@CF-TTL-06:~/projecte$ nano .gitignore ''' Creamos .gitignore
alumne@CF-TTL-06:~/projecte$ git add .gitignore ''' Lo subims el archivo .gitignore
warning: in the working copy of '.gitignore', LF will be replaced by CRLF the next time Git touches it
alumne@CF-TTL-06:~/projecte$ git commit -m "Afegint .gitignore" ''' Lo subimos a git con comentario
[main aa581f9] Afegint .gitignore
 1 file changed, 21 insertions(+)
 create mode 100644 .gitignore


alumne@CF-TTL-06:~/projecte$ nano Hello.java ''' Cremos el fichero Hello.java
alumne@CF-TTL-06:~/projecte$ javac Hello.java ''' Compilamos el programa de java
alumne@CF-TTL-06:~/projecte$ git add * '''Subimos todo a git


alumne@CF-TTL-06:~/projecte$ git status ''' Realizamios un git status
En la rama main
Cambios a ser confirmados:
  (usa "git restore --staged <archivo>..." para sacar del área de stage)
        nuevos archivos: Hello.class
        nuevos archivos: Hello.java

alumne@CF-TTL-06:~/projecte$ git commit -m "Added Hello.java" '''Lo sibimos con comentario

[main 778b970] Added Hello.java
 2 files changed, 5 insertions(+)
 create mode 100644 Hello.class
 create mode 100644 Hello.java


alumne@CF-TTL-06:~/projecte$ git revert cfb19dc ''' Revertimos la orden cfb19dc
ayuda: Esperando que tu editor cierre el archivo ... 
[2]+  Detenido                git revert cfb19dc

alumne@CF-TTL-06:~/projecte$ git commit -m "Revert esborrat tmp1" ''' Heu pujem amb un comentari

[main 601ad28] Revert esborrat tmp1
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 tmp1.md

alumne@CF-TTL-06:~/projecte$ git log --oneline 
601ad28 (HEAD -> main) Revert esborrat tmp1
778b970 Added Hello.java
aa581f9 Afegint .gitignore
6c611ad Renomenat tmp_mv_1.md a tmp_mv_1.md
52e6f25 Renomenat tmp_mv.md a tmp_mv_1.md
376c65d creat tmp_mv.md
c17e28d Eliminant tmp2.md
cfb19dc Eliminant tmp1.md
5292e64 Afegim dis fichers de prova
9f5f272 modificar fichero1.txt
0aef075 Afegint el primer comit


alumne@CF-TTL-06:~/projecte$ git status ''' Realizamios un git status
En la rama main
nada para hacer commit, el árbol de trabajo está limpio

alumne@CF-TTL-06:~/projecte$ git clean -f ''' Eliminaos toddo lo que haya en git
alumne@CF-TTL-06:~/projecte$ touch f1 f2 f3 ''' Creamos f1 f2 f3
alumne@CF-TTL-06:~/projecte$ git status ''' Vemos el estado
En la rama main
Archivos sin seguimiento:
  (usa "git add <archivo>..." para incluirlo a lo que será confirmado)
        f1
        f2
        f3

no hay nada agregado al commit pero hay archivos sin seguimiento presentes (usa "git add" para hacerles seguimiento)

alumne@CF-TTL-06:~/projecte$ git clean -f ''' Borramos todo lo que haya en el estado
Borrando f1
Borrando f2
Borrando f3


alumne@CF-TTL-06:~/projecte$ git clean -f -d ''' Eliminamos ficheros i directorios no rastreados


alumne@CF-TTL-06:~/projecte$ git log ''' Realizamos el git log para vare todos los cambios
commit 601ad2810322565c0ddaf6c6e76040938c0713c0 (HEAD -> main)
Author: AdiranB DAM <adrianbarbosa.dam.ieseljust@gmail.com>
Date:   Mon Dec 16 09:39:26 2024 +0100

    Revert esborrat tmp1

commit 778b9707f76cc2e1e3191b491b8cdf0ec7b0bfa8
Author: AdiranB DAM <adrianbarbosa.dam.ieseljust@gmail.com>
Date:   Mon Dec 16 09:37:44 2024 +0100

    Added Hello.java

commit aa581f98827c8347f26adb209a1685a67a56bbb3
Author: AdiranB DAM <adrianbarbosa.dam.ieseljust@gmail.com>
Date:   Mon Dec 16 09:34:27 2024 +0100

    Afegint .gitignore

commit 6c611ad86d1a9febf76fddaa0c6e97991584c931
Author: AdiranB DAM <adrianbarbosa.dam.ieseljust@gmail.com>
Date:   Mon Dec 16 09:31:11 2024 +0100

    Renomenat tmp_mv_1.md a tmp_mv_1.md

commit 52e6f2595cd3162541c542ebb27f18a0ce4e45d7
Author: AdiranB DAM <adrianbarbosa.dam.ieseljust@gmail.com>
Date:   Mon Dec 16 09:29:10 2024 +0100

    Renomenat tmp_mv.md a tmp_mv_1.md

commit 376c65d814dc0313c7413164b7524028d21f9fbe
Author: AdiranB DAM <adrianbarbosa.dam.ieseljust@gmail.com>
Date:   Mon Dec 16 09:27:36 2024 +0100

    creat tmp_mv.md

commit c17e28d68b0fcf709157b89572a3a1687d9fc30a
Author: AdiranB DAM <adrianbarbosa.dam.ieseljust@gmail.com>
Date:   Mon Dec 16 09:26:45 2024 +0100

    Eliminant tmp2.md

commit cfb19dcf7cfe6ce67a24a9727a0179e8f083f858
Author: AdiranB DAM <adrianbarbosa.dam.ieseljust@gmail.com>
Date:   Mon Dec 16 09:25:58 2024 +0100

    Eliminant tmp1.md

commit 5292e64bdf20a27781ced171b14551b2e181c6d1
Author: AdiranB DAM <adrianbarbosa.dam.ieseljust@gmail.com>
Date:   Mon Dec 16 09:24:51 2024 +0100

    Afegim dis fichers de prova

commit 9f5f2723e9e9717ccb321a071b2e7fa94e10536d
Author: AdiranB DAM <adrianbarbosa.dam.ieseljust@gmail.com>
:



![Imagen git log --oneline](/APUNTES-LMI-EDD/scv/APUNTES-LMI-EDD/docs_md/EDD/ACTIVIDADES%20MKDOCS%20Y%20PUBLICACIÓN%20EN%20GITHUB/gitlog%20--oneline.png)
