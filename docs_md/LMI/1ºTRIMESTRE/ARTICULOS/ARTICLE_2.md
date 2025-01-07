# Identificació dels espais de noms en documents (AndroidManifest.xml).


## Descripció:
SVG és un llenguatge utilitzat per descriure gràfics vectorials escalables.

## Característiques:
- **Vectorial:** Els gràfics es poden escalar sense pèrdua de qualitat.
- **Basat en XML:** La sintaxi de SVG es basa en XML.
- **Interactivitat i animació:** Permet interactivitat i animacions amb CSS o JavaScript.
- **Compatibilitat amb HTML:** Pot incrustar-se directament en documents HTML.
- **Manipulació del DOM:** Es pot manipular dinàmicament amb JavaScript.

# Identificació dels Espais de Noms en Documents (AndroidManifest.xml)

Els espais de noms (namespaces) en documents XML, com `AndroidManifest.xml`, són importants per evitar conflictes entre noms d'etiquetes i atributs, especialment quan s'utilitzen diferents llenguatges o biblioteques. En el context del desenvolupament d'Android, l'`AndroidManifest.xml` és un fitxer essencial que conté informació sobre l'aplicació, incloent-hi el nom del paquet, les activitats, els permisos, etc.

## Espais de Noms en `AndroidManifest.xml`

1. **Definició d'Espais de Noms:**
   Els espais de noms en XML s'usen per qualificar noms d'elements i atributs per tal d'identificar a quin vocabulari pertanyen. Es defineixen amb un prefix i una URI (Uniform Resource Identifier).

2. **Espai de Noms Comú en Android:**
   L'`AndroidManifest.xml` sol tenir un espai de noms comú per a les etiquetes del manifest. Aquest espai de noms es defineix en l'element arrel del document:

        
        <manifest xmlns:android="http://schemas.android.com/apk/res/android"
            package="com.example.myapp">
            ...
        </manifest>

3. **Usos dels Espais de Noms:** 
    Aquí hi ha alguns exemples d'etiquetes i atributs que utilitzen l'espai de noms d'Android:

            <application
                android:allowBackup="true"
                android:icon="@mipmap/ic_launcher"
                android:label="@string/app_name"
                android:roundIcon="@mipmap/ic_launcher_round"
                android:supportsRtl="true"
                android:theme="@style/AppTheme">
                <activity android:name=".MainActivity">
                    <intent-filter>
                        <action android:name="android.intent.action.MAIN" />
                        <category android:name="android.intent.category.LAUNCHER" />
                    </intent-filter>
                </activity>
            </application>
            
##  Altres Espais de Noms
En alguns casos, potser voldràs utilitzar altres espais de noms per integrar biblioteques o frameworks externs. Per exemple, si utilitzes XML per definir components de UI en una aplicació Android, podràs veure espais de noms personalitzats:
    <layout xmlns:app="http://schemas.android.com/apk/res-auto">
    <androidx.constraintlayout.widget.ConstraintLayout
        xmlns:android="http://schemas.android.com/apk/res/android"
        ...>
        <Button
            android:id="@+id/button"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            app:layout_constraintTop_toTopOf="parent"
            app:layout_constraintStart_toStartOf="parent"
            ... />
    </androidx.constraintlayout.widget.ConstraintLayout>
    </layout>
