<script>
    import Sector from '$lib/Sector.svelte';
    import Matching from '$lib/Matching.svelte'
    import Choice from '$lib/Choice.svelte'
    import TataRuang from '$lib/TataRuang.svelte'
    import Protes from '$lib/Protes.svelte'
    import BacaArtikel from '$lib/BacaArtikel.svelte'
    import Fact from './Fact.svelte'
    import Resume from './Resume.svelte'
    import Infog from './Infog.svelte'
    import Aspirasi from './Aspirasi.svelte'
    import GameOver from './GameOver.svelte'

    import Dialog from './Dialog.svelte'
    import LabelHijau from './LabelHijau.svelte';

    export let index

    let sector = "a", allowClick, match, area, time = 30, state = 0
</script>

<div class="screen">
    {#if index == 2}
        <!-- PILIH SEKTOR -->
        <Sector bind:index bind:sector/>

    {:else if index >= 3 && index <= 5}
        <!-- INFOGRAFIS STATIS -->
        <Infog {index}/>

    {:else if index >= 6 && index <= 7}
        <!-- MENCOCOKAN DOKUMEN -->
        <Matching bind:index bind:match/>

    {:else if index == 8}
        <!-- MEMILIH OPSI LAHAN -->
        <TataRuang bind:index bind:allowClick bind:area/>

    {:else if index == 9}
        <!-- KOREKSI OPSI LAHAN -->
        <Choice bind:index bind:area bind:allowClick /> 

    {:else if index == 10}
        <!-- PILIHAN AMDAL -->
        <Choice bind:index/>

    {:else if index >= 10 && index <= 11}
        <!-- MENDENGARKAN MASYARAKAT -->
        <Aspirasi bind:index bind:time/>

    {:else if index == 12}
        <!-- PROTES MASYARAKAT -->
        <Protes bind:index bind:state/>

    {:else if index == 13}
        <BacaArtikel bind:index/>

    {:else if index == 14}
        <!-- PENGHENTIAN PROYEK -->
        <Choice bind:index/>

    {:else if index == 15}
        <!-- TAMBAH LABEL HIJAU -->
        <LabelHijau />

    {:else if index >= 16 && index <= 21}
        <!-- CEK FAKTA PROYEK TERDAHULU -->
        <Fact bind:index/>

    {:else if index == 22}
        <!-- RESUME -->
        <Resume bind:index bind:sector bind:area bind:state/>
    
    {:else if index == 23 || index == 24}
        <!-- GAME OVER -->
        <GameOver bind:index/>
    {/if}
</div>

<Dialog bind:index bind:match bind:area bind:time/>

<style>
    .screen {
        width:100%;
        background-color: lightyellow;
        /* aspect-ratio: 1; */
        height:100%;
    }

    @media only screen and (max-width: 400px) {
        .screen {
            height:auto;
            aspect-ratio: 3/4;
        }
    }
    
</style>