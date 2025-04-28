<script>
    import ButtonAudio from "./ButtonAudio.svelte";

    export let index, sector

    let play = false
    let selected = false

    function select(e) {
        sector = e.target.dataset.value
        selected = true
        playAudio()
    }

    function playAudio() {
        play = true
        setTimeout(() => {play = false},100)
    }
</script>

<section>
    <h2>Pilih sektor usahamu:</h2>
    <!-- <select bind:value={sector}>
        <option value="pertambangan">Pertambangan</option>
        <option value="agrikultur">Agrikultur</option>
        <option value="pariwisata">Pariwisata</option>
    </select> -->
    <div>
        <button class="sector" class:selected={sector == "nikel" && selected} on:click={select} data-value="nikel">Smelter Nikel</button>
        <button class="sector" class:selected={sector == "geothermal" && selected} on:click={select} data-value="geothermal">Geothermal</button>
        <button class="sector" class:selected={sector == "kik" && selected} on:click={select} data-value="kik">Kawasan Industri Hijau</button>
        <button class="sector" class:selected={sector == "pariwisata" && selected} on:click={select} data-value="pariwisata">Pariwisata</button>
        <button class="sector" class:selected={sector == "food" && selected} on:click={select} data-value="food">Food Estate</button>
        <button class="sector" class:selected={sector == "ikn" && selected} on:click={select} data-value="ikn">IKN</button>
        <button class="sector" class:selected={sector == "rempang" && selected} on:click={select} data-value="rempang">Rempang Eco City</button>
        <button class="sector" class:selected={sector == "tebu" && selected} on:click={select} data-value="tebu">Tebu & Bioetanol</button>
    </div>
    <button class="next" on:click={() => {index = 3}} disabled={!selected}>Lanjut</button>
</section>

<ButtonAudio {play} />

<style>
    h2 {
        font-family: "Lexend Giga", sans-serif;
        width:88%;
        text-align: center;  
    }
    section {
        width:100%;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    section > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap:0.5rem;
    }
    select {
        font-size: 1.5rem;
        margin-bottom:1.5rem;
    }
    .sector {
        width:21%;
        aspect-ratio: 1;
    }
    button {
        background-color: lightgrey;
        border-radius: 0.5rem;
        border:none;
        font-family: 'Noto Sans', sans-serif;
        box-shadow: 2px 2px 0 #089f5e;
        transition: background 300ms ease-in-out;
    }
    .next {
        margin-top:4rem;
        background-color: lightyellow;
        border-radius: 0.5rem;
        font-weight: 600;
        padding:0.3rem;
        padding-left:0.8rem;
        padding-right:0.8rem;
        border: 2px solid black;
    }
    .selected {
        background-color: #fdf10f;
    }
    .next:disabled {
        border: 2px solid grey;
        box-shadow: 2px 2px 0 grey;
    }
</style>