import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'

firebase.initializeApp({
    apiKey: "AIzaSyBUbMSAEyB_s3_M3Fzf6BjNgXkxPMivPYk",
    authDomain: "alfabook-8b927.firebaseapp.com",
    databaseURL: "https://alfabook-8b927.firebaseio.com",
    projectId: "alfabook-8b927",
    storageBucket: "alfabook-8b927.appspot.com",
    messagingSenderId: "197702886132",
    appId: "1:197702886132:web:df1a050378e0f968e7b4a1"
});

export const addBook = async (name, author, category, src, price, description, cover, pagesCount, publicationDate, token) => {
    firebase.database().ref(`books/` + token).set({
        name, author, category, src, price, description, cover, pagesCount, publicationDate
    }).catch(e => console.log('addPhoto Error:', e))
}

export const getBooks = () => {
    return firebase.database().ref('books').once('value').then(r => r.val())

}
export const getCategoryBooks = (category) => {
    return firebase.database().ref('category/' + category).once('value').then(r => r.val())

}

export const getSelectedBook = (token) => {
    return firebase.database().ref('books/' + token).once('value').then(r => r.val())
}

export const addBookInCategory = (name, author, category, src, price, description, cover, pagesCount, publicationDate, token) => {
    firebase.database().ref('category/' + category + '/' + token).set({
        name, author, category, src, price, description, cover, pagesCount, publicationDate
    }).catch(e => console.log('addBookCategory Error:', e))
}