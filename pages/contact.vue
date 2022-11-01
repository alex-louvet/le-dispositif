<template>
    <div>
        <Banner />
        <Menu />
        <div class="form-container">
            <label for="name">Name:</label>
            <input id="name" type="text"><br>
            <label for="email">Email:</label>
            <input id="email" type="text"><br>
            <label for="subject">Subject:</label>
            <input id="subject" type="text"><br>
            <textarea name="content" id="content" rows="4" ></textarea><br>
            <button @click="sendForm">Send</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"Contact",
    methods: {
        sendForm(){
            return 0
        }
    }
    
}
</script>

<style>
.form-container{
    text-align:center;
    padding-top: 20px;
    padding-right:auto;
    padding-left: auto;
    height: 100vh;
}

.form-container input{
    margin-bottom: 10px;
    background-color: #ff8535;
    border: 1px solid #424242;
    padding: 2px;
    width: min(80%, 500px);
}

.form-container textarea {
    background-color: #ff8535;
    border: 1px solid #424242;
    width: min(80%, 550px);
}

.form-container button {
    margin-top: 10px;
    background-color: #07708f;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 5px;
}

.form-container button:hover {
    cursor: pointer;
}
</style>