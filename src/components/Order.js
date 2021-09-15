import React, { useState, createContext } from "react";

import { getFirestore, collection } from 'firebase/firestore';

import { productosCollection } from '../firebase';
import { getDocs } from 'firebase/firestore';

import carritoContext from '../context/CartContext';

import * as firebase from 'firebase/app';

import 'firebase/firestore';


const mockMapUserOrder = {
    buyer:
        { name, phone, email },
    items: [
        { id, title, price }
    ],
    total
};

const db = getDocs();

const orders = db.collection("orders");
const newOrder = {
    buyer = userInfo,
    items = cart,
    date = firebase.firestore.Timestamp.fromDate(new Date()),
    total = price()
}

orders.add(newOrder).then(({ id })) => {
    setOrderId(id);
}).catch (err => {
    setError(err);
}).finally(() => {
    setLoading(false);
});