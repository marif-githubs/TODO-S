import { createContext, useEffect, useReducer } from "react";

export const data = createContext({
    list: [],
    setList: () => { },
    handleAddTodo: () => { },
    handleDeleteTodo: () => { }
});

const dataFunction = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [action.payload, ...state];
        case "DELETE_TODO":
            return state.filter((item) => item.id !== action.payload);
        case "SET_LIST":
            return action.payload;
        default:
            return state;
    }
}


export const DataProvider = ({ children }) => {
    const [list, dispatch] = useReducer(dataFunction, []);

    const handleAddTodo = (item) => {
        fetch("http://localhost:8080/TODO", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    dispatch({ type: "ADD_TODO", payload: data });
                }
            });
    };

    const handleDeleteTodo = (id) => {
        fetch(`http://localhost:8080/TODO/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
        dispatch({ type: "DELETE_TODO", payload: id });
    };


    useEffect(() => {
        const Controller = new AbortController();
        const signal = Controller.signal;
        fetch("http://localhost:8080/TODO/list", { signal })
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: "SET_LIST", payload: data });
            });
        return () => {
            Controller.abort();
        };
    }, [])

    return (
        <data.Provider value={{ list, handleAddTodo, handleDeleteTodo }}>
            {children}
        </data.Provider>
    );
}