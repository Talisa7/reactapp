
import './App.css';

function App() {
  return (
    <>
      
      <main>
        <div className="content">
           <h1>
          Learn to code by watching others
           </h1>
           <p className ="para">
             See how experienced developers solve probems in real time.  Watching scripted tutorials is great, but understanding how developers think is invaluable.
           </p>
        </div>
        <div className ="form">
          <form action="/actionpage.php" method="GET">
                <input type="text" id="fname" name="fname" placeholder="Jonathan"/> <br/>
                <input type="text" id="lname" name="lname" placeholder="Last Name"/> <br/>
                <input type="email" name="email" id="email" placeholder="Email Address"/> <br/>
                <input type="text" id="password" name="password" placeholder="Password"/><br/>
                <input type="submit" value="claim your free trial"/>
            </form>
            <p className="bottom">By clicking the button you are agreeing to our <span className="red"> Terms and Services </span> </p>
        </div>
        <section>
                <p>
                    <b>Try it free 7 days</b> then &#36; 20/mo. thereafter
                </p>
            </section>
      </main>
    </>
  );
}

export default App;
