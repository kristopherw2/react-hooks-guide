import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context"


const cockpit = (props) => {

	const toggleButtonRef = useRef(null);
	const authContext = useContext(AuthContext);

	console.log(authContext.authenticated)

	useEffect(() => {
		console.log('[Cockpit.js] useEffect')
		// HTTP request...
		// setTimeout(() => {
		// 	alert("Saved data to cloud.")
		// }, 1000)
		toggleButtonRef.current.click();
		return () => {
			console.log('[Cockpit.js] clean up work in useEffect')
		}
	}, []);

	useEffect(() => {
		console.log("[Cockpit.js] 2nd useEffect");
		return () => {
			console.log("[Cockpit.js] clean up work in 2nd useEffect");
		};
	})

	let assignedClasses = [];
	let btnClass = "";

	if (props.showPersons) {
		btnClass = classes.red;
	}

	if (props.personsLength <= 2) {
		assignedClasses.push(classes.red);
	}

	if (props.personsLength <= 1) {
		assignedClasses.push(classes.bold);
	}

	return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>This is really working!</p>
            <button
                ref={toggleButtonRef}
                className={btnClass}
                onClick={props.clicked}
            >
                Toggle Persons
            </button>
                { <button onClick={authContext.login}>Log In</button>}
        </div>
    );
};

export default React.memo(cockpit);
