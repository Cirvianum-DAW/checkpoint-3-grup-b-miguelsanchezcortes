### Avaluació del Codi de l'Exercici "Formulari de Productes"

#### Repte 1 - Validació de Formularis (4p)

1. **Totes les validacions a través de JS (0,5p)**:

   - Correcte. No s'utilitzen validacions HTML.

2. **Ús d'almenys tres esdeveniments diferents per les validacions (0,5p)**:

   - Incorrecte. Només s'han utilitzat els esdeveniments `submit`, `input` i `change` per una part dels camps, però no cobreix tots els camps necessaris.

3. **Validacions - 1a Part (1p)**:

   - **Nom i cognom han de tenir com a mínim 3 caràcters i menys de 50**:
     - Correcte, però no mostra missatges d'error personalitzats.
   - **No poden contenir números**:
     - Correcte, però no mostra missatges d'error personalitzats.
   - **L'adreça de correu electrònic ha de tenir un caràcter @ i un caràcter .**:
     - Correcte, però no mostra missatges d'error personalitzats.

4. **Validacions - 2a Part (1p)**:

   - **El gènere ha de ser una de les opcions disponibles al formulari**:
     - Correcte.
   - **Ha de ser major d'edat per poder realitzar la comanda**:
     - Correcte, però utilitza alertes en lloc de missatges d'error personalitzats.
   - **El text a "Message" ha de tenir com a mínim 10 caràcters i com a màxim 200**:
     - Correcte, però no mostra missatges d'error personalitzats.

5. **Validacions - 3a Part (1p)**:
   - **El producte ha de ser una de les opcions disponibles al formulari**:
     - No implementat. No es valida si el producte és una de les opcions disponibles abans d'afegir-lo a la llista.

Comentaris:

- Les validacions funcionen correctament, però utilitzen alertes per mostrar els errors en lloc de missatges personalitzats sota els camps corresponents.
- No s'han utilitzat suficients esdeveniments per cobrir el requeriment de tres esdeveniments diferents.
- Falta la validació per assegurar-se que el producte seleccionat és una de les opcions disponibles abans d'afegir-lo a la llista.

#### Repte 2 - Afegir Productes al Formulari (5p)

1. **Carregar els productes disponibles al formulari (2p)**:

   - Correcte. Els productes es carreguen correctament al select i es mostren les opcions disponibles.
   - Quan es selecciona un producte, es mostra la quantitat per defecte de 1 i el preu unitari.

2. **Afegir productes a una llista (2p)**:

   - Implementat parcialment. Els productes es poden afegir al carret, però la llista de productes seleccionats no es mostra correctament.
   - Falta la funcionalitat per actualitzar el preu total quan es canvia la quantitat abans d'afegir al carret.

3. **Modificar i finalitzar el formulari (1p)**:
   - No implementat. No es mostra un missatge final de confirmació quan es fa el submit del formulari indicant que la comanda s'ha realitzat correctament i l'import final a pagar.

Comentaris:

- La funcionalitat per afegir productes al carret està implementada parcialment. Cal completar la funció `updateProductsList` per mostrar correctament la llista de productes seleccionats i el preu total.
- S'hauria d'afegir un event listener per actualitzar el preu basat en la quantitat seleccionada abans d'afegir al carret.
- Falta el missatge final de confirmació després de fer el submit del formulari.

#### Qualitat del Codi, Estructura, Llegibilitat i Comentaris (1p)

1. **Qualitat del codi**:

   - El codi presenta una estructura adequada però necessita millores.
   - Necessita millorar la llegibilitat i la modularitat.

2. **Estructura i llegibilitat**:
   - El codi no està del tot ben estructurat.
   - Es podrien afegir més comentaris per millorar la comprensió.

Comentaris:

- Incloure més comentaris per explicar la funcionalitat del codi ajudaria a millorar la seva mantenibilitat.
- La gestió d'errors es podria millorar afegint feedback a l'usuari amb missatges d'error personalitzats sota els camps corresponents.

### Resum:

- **Validacions:** Implementades correctament però utilitzen alertes en lloc de missatges personalitzats sota els camps. No s'han utilitzat tres esdeveniments diferents. Falta la validació per assegurar-se que el producte seleccionat és una de les opcions disponibles abans d'afegir-lo a la llista.
- **Afegir Productes al Formulari:** Implementació parcial. Cal completar la funció `updateProductsList` i afegir la funcionalitat per mostrar el preu total actualitzat i un missatge final de confirmació després del submit.
- **Qualitat del Codi:** La qualitat del codi podria millorar amb una millor estructura i més comentaris explicatius.
