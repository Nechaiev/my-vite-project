<template>
    <div>
        <navbar/>
        <main class="app p-5">
            <slot>
                <router-view/>
            </slot>
        </main>
        <footer>
            footer
        </footer>
    </div>
</template>