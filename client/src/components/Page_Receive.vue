<template>
    <div>
        {{ Meow1 }} <br>
        {{ Meow2 }}<br><br><br>
        <router-link to="/PageSend"><button>Back</button></router-link>
    </div>
</template>

<script>
export default{
    props:  [
        'Meow1',
        'Meow2'
    ]
}
</script>