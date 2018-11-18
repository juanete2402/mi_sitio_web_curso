// dependencias
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import './config'

const d = document

function uploadPhoto(photo) {
    console.log(photo)
}

export default function savePhoto() {
    d.addEventListener('submit', e => {
        if (e.target.matches('#form-save-photo')) {
            e.preventDefault()
            let photo = e.target.photo.files[0]

            if (photo.type.match('image.*')) {
                uploadPhoto(photo)
            } else {
                e.target.querySelector('.u-message').innerHTML = 'El archivo que intenta subir no es una imagen <br><i class="fas fa-sad-cry"></i>'
            }
        }
    })
}