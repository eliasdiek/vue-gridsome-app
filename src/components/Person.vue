<template>
    <div class="person">
        <div class="person-photo">
            <v-img :src="person.photo" fit="contain"></v-img>
        </div>
        <div class="person-info">
            <div class="name">
                <span class="first-name">{{person.firstName}}</span>&nbsp;<span class="last-name">{{person.lastName}}</span>
            </div>
            <div class="role">
                <p>{{person.role}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        person: Object
    },
}
</script>