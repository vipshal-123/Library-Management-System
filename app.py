from flask import Flask, render_template, redirect, request, session, url_for, flash

app = Flask(__name__)
app.secret_key = 'qwertyuiop1234567890'

@app.route('/logout')
def logout():
    session.clear()
    flash('You have been logged out')
    return redirect(url_for('login'))

@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username == 'admin' and password == 'admin':
            # store the username in the session object
            session['username'] = username
            return redirect(url_for('dashboard'))
        else:
            flash('Invalid username or password')
            return render_template('login.html')
    else:
        return render_template('login.html')


@app.route('/dashboard')
def dashboard():
    # username = session['user-name-input']
    return render_template('index.html')

@app.route('/borrow', methods=['GET' , 'POST'])
def borrow():
    if request.method == 'POST':
        return redirect(url_for('dashboard'))
    else:
        return render_template('borrow.html')

if __name__ == '__main__':
    app.run()
