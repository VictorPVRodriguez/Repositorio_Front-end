<template>   
    <div id="login">
        <img src="../assets/RaMIcon.jpg">
        <h1>Login</h1>
        <form @submit.prevent="submit">
            <p>email: </p>
            <input type="email" v-model="email" >
            <p>Password: </p>
            <input type="password"  v-model="password"  >
            <button type="submit">Enviar</button>
            <br>
            <span>Don´t you have an account?</span><a href="register">Register</a>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            email:'',
            password:''
        }
    },
    methods:{
        submit(){
            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAx5afDBHgF_yoh3qa9lj0qiGCWm07P4Do',{
                email:this.email,
                password: this.password,
                returnSecureToken:true
            }).then(
                res => this.$store.commit('setUser',res.data),
                this.$router.push("/")
            ).catch(
                res => console.log(res)
            )
        }
    }
}
</script>
<style scoped>
#login{
    color:#29d438;
    position: center;
    box-sizing: border-box;
}
h1{
    margin: 0;
    padding: 0 0 20px;
    text-align: center;
    font-size: 22px;
    
}
.login p{
    margin: 0;
    padding: 0;
    font-weight: bold;
}
.login input{
    width: 100%;
    margin-bottom: 20px;
}
.login input[type="email"], input[type="password"]{
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    outline: none;
    height: 40px;
    color: rgb(192, 66, 182);
    font-size: 16px;
}
.login button[type="submit"]{
    border: none;
    outline: none;
    height: 40px;
    background: #fb2525;
    color: #fff;
    font-size: 18px;
    width: 250px;
    border-radius: 20px;
}
.login button[type="submit"]:hover{
   cursor: pointer;
   background: #ffc107;
   color: #000; 
}
@media (min-width: 375px) and (max-width: 1079px){
  #login{
    margin-top: 30px;
    margin-left: 50px;
  }
  #login img{
    margin-top: 5px;
    width: 150px; 
    height: 100px;
  }
}
@media (min-width: 1080px){
  #login{
    margin-top: 20px;
    margin-left: 45px;
  }
  #login img{
    margin-top: 10px;
    width: 350px; 
    height: 200px;
  }
}
</style>