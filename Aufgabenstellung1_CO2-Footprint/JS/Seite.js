function jahrÄndern(coJahr) {
  document.getElementById("coDatenJahr").innerHTML =
    `<b>` + "CO² Emission für " + coJahr + `</b>`;
}

function mainContent(eingabe) {
  switch (eingabe) {
    case "home":
      document.getElementById("mainContentPage").innerHTML = `
        <div class="col">
          <div class="container-fluid text-center">
           <div class="container-fluid text-center">
           <p></p>
            <b>Willkommen auf der Co² Datenseite</b>
            <p></p>
            </div>
            <img src="../img/co2Logo.png" class="img-fluid" alt="Responsive image">
            <p></p>
            <a href="https://de.vecteezy.com/kostenloses-png/co2">Co2 PNGs von Vecteezy</a>
          </div)
        </div>`;
      break;
    case "tabelle":
      document.getElementById("mainContentPage").innerHTML = `
        <div class="col">
            <div class="container-fluid text-center" id="coDatenJahr">
            </div>
         </div>
        <!--Input für suche-->
        <div class="d-flex justify-content-center my-3">
            <input type="text" id="tbInputFilter" onkeyup="suchen()" placeholder="Land / Unternehmen">
        </div>
        <!-- Tabelle erstellen  -->
        <table id="tabelleEmission" class="table table-bordered table-striped-columns">
            <tr class="bg-info table-secondary">
            <th onclick="sortieren(0)">Land</th>
            <th onclick="sortieren(1)">Unternehmen</th>
            <th>CO² Emission</th>
            </tr>
            <tbody id="myTableBody">
            </tbody>
        </table>`;
      break;
    case "datenschutz":
      document.getElementById("mainContentPage").innerHTML = `
      <div class="col">
        <div class="container-fluid text-center">
        
            <h1>Datenschutzerklärung</h1>

            <h2>1. Einleitung</h2>
            <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Im Folgenden möchten wir Sie darüber informieren, welche personenbezogenen Daten wir erheben, verarbeiten und nutzen, wenn Sie unsere Website besuchen.</p>

            <h2>2. Verantwortliche Stelle</h2>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <p>[Name des Unternehmens/Betreibers]<br>
            [Adresse]<br>
            [Telefonnummer]<br>
            [E-Mail-Adresse]</p>

            <h2>3. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung</h2>

            <h3>a) Besuch der Website</h3>
            <p>Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:</p>
            <p>IP-Adresse des anfragenden Rechners,</p>
            <p>Datum und Uhrzeit des Zugriffs,</p>
            <p>Name und URL der abgerufenen Datei,</p>
            <p>Website, von der aus der Zugriff erfolgt (Referrer-URL),</p>
            <p>verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers.</p> 
            <p>Die genannten Daten werden von uns zu folgenden Zwecken verarbeitet:</p>          
            <p>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,</p>
            <p>Gewährleistung einer komfortablen Nutzung unserer Website,</p>
            <p>Auswertung der Systemsicherheit und -stabilität sowie</p>
            <p>zu weiteren administrativen Zwecken.</p>          
 
            <h3>b) Kontaktformular</h3>
            <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>

            <h3>c) Cookies</h3>
            <p>Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Cookies richten keinen Schaden an und enthalten keine Viren. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>
            <p>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden, Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.</p>

            <h2>4. Weitergabe von Daten</h2>
            <p>Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt.</p>
            <p>Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:</p>
          
            <p>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben,</p>
            <p>die Weitergabe zur Wahrung berechtigter Interessen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben,</p>
            <p>für den Fall, dass eine gesetzliche Verpflichtung besteht, sowie</p>
            <p>dies gesetzlich zulässig und für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist.</p>
          

          <h2>5. Rechte der Betroffenen</h2>
          <p>Sie haben das Recht:</p>
          
            <p>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen,</p>
            <p>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen,</p>
            <p>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen,</p>
            <p>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen,</p>
            <p>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen,</p>
            <p>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen und</p>
            <p>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.</p>
          

          <h2>6. Datensicherheit</h2>
          <p>Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. Zudem setzen wir geeignete technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.</p>

          <h2>7. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand [Datum].</p>
          <p>Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf unserer Website von Ihnen abgerufen und ausgedruckt werden.</p>
        </div>
      </div>`;

      break;
    case "impressum":
      document.getElementById("mainContentPage").innerHTML = `
      <div class="col">
        <div class="container-fluid text-center">      
        <h1>Impressum</h1>
        <p>Angaben gemäß § 5 TMG:</p>
        
        <p>
            <strong>Max Mustermann</strong><br>
            Musterstraße 1<br>
            12345 Musterstadt<br>
            Deutschland
        </p>
        
        <h2>Kontakt</h2>
        <p>
            Telefon: +49 (0) 123 456 789<br>
            E-Mail: <a href="mailto:info@musterseite.de">info@musterseite.de</a><br>
            Website: <a href="https://www.musterseite.de">www.musterseite.de</a>
        </p>
        
        <h2>Umsatzsteuer-ID</h2>
        <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br>
            DE123456789
        </p>
        
        <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
        <p>
            Berufsbezeichnung: Webdesigner<br>
            Verliehen in: Deutschland
        </p>
        <p>
            Es gelten folgende berufsrechtliche Regelungen:<br>
            <a href="https://www.gesetze-im-internet.de/">Berufsordnung nachlesen</a>
        </p>
        
        <h2>Haftungsausschluss</h2>
        <p>
            <strong>Haftung für Inhalte</strong><br>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>
        
        <h2>Urheberrecht</h2>
        <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>
        </div)
      </div>`;

      break;

      document.getElementById("mainContentPage").innerHTML = `
      <div class="col">
        <div class="container-fluid text-center">
        
    <h1>Impressum</h1>
    <p>Angaben gemäß § 5 TMG:</p>
    
    <p>
        <strong>Max Mustermann</strong><br>
        Musterstraße 1<br>
        12345 Musterstadt<br>
        Deutschland
    </p>
    
    <h2>Kontakt</h2>
    <p>
        Telefon: +49 (0) 123 456 789<br>
        E-Mail: <a href="mailto:info@musterseite.de">info@musterseite.de</a><br>
        Website: <a href="https://www.musterseite.de">www.musterseite.de</a>
    </p>
    
    <h2>Umsatzsteuer-ID</h2>
    <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br>
        DE123456789
    </p>
    
    <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
    <p>
        Berufsbezeichnung: Webdesigner<br>
        Verliehen in: Deutschland
    </p>
    <p>
        Es gelten folgende berufsrechtliche Regelungen:<br>
        <a href="https://www.gesetze-im-internet.de/">Berufsordnung nachlesen</a>
    </p>
    
    <h2>Haftungsausschluss</h2>
    <p>
        <strong>Haftung für Inhalte</strong><br>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
    </p>
    <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
    </p>
    
    <h2>Urheberrecht</h2>
    <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
    </p>
    <p>
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
    </p>
      </div>`;

      break;
  }
}
