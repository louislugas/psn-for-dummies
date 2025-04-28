<script>
  import { text } from "@sveltejs/kit";
  import {goto} from "$app/navigation"

    export let index, sector, area, state

    let s = ""
    let t = []
    let a = ""
    let p = ""
    let i = []

    $: if (sector == "nikel") {
        s = "Smelter Nikel"
        t = ["Lim Hariyanto"]
        i = ["lim-hariyanto"]
    } else if (sector == "geothermal") {
        s = "Geothermal"
        t = ["Pertamina", "PLN"]
        i = ["pertamina", "pln"]
    } else if (sector == "kik") {
        s = "Kawasan Industri Hijau Indonesia"
        t = ["Boy Thohir"]
        i = ["boy-thohir"]
    } else if (sector == "pariwisata") {
        s = "Pariwisata"
        t = ["PT Aviasi Pariwisata Indonesia (Injourney)"]
        i = ["injourney"]
    } else if (sector == "food") {
        s = "Food Estate"
        t = ["Haji Isam"]
        i = ["haji-isam"]
    } else if (sector == "ikn") {
        s = "Ibu Kota Nusantara"
        t = ["Aguan"]
        i = ["aguan"]
    } else if (sector == "rempang") {
        s = "Rempang Eco City"
        t = ["Tomy Winata"]
        i = ["tomy-winata"]
    } else if (sector == "tebu") {
        s = "Tebu & Bioetanol"
        t = ["Martias Fangiono"]
        i = ["martias-fangiono"]
    }

    $: if (area = 0) {
        a = "Kawasan Hutan/Masyarakat Adat"
    } else if (area = 1) {
        a = "Kawasan Pertanian/Perkebunan"
    } else if (area = 2) {
        a = "Kawasan Pesisir"
    } else if (area = 3) {
        a = "Kawasan Permukiman"
    }

    $: if (state == 1) {
        p = "Membubarkan Massa"
    } else if (state == 2) {
        p = "Menangkap Massa Aksi"
    } else if (state == 3) {
        p = "Menangkap Jurnalis"
    }
</script>

<section>
    <h2>Resume Proyek</h2>
    <div>
        <div class="resume">
            <p class="head">Sektor Proyek</p>
            <p class="content">{s}</p>
        </div>
        <div class="resume">
            <p class="head">Kelengkapan Dokumen</p>
            <p class="content">Lengkap</p>
        </div>
        <div class="resume">
            <p class="head">Lokasi Proyek</p>
            <p class="content">{a}</p>
        </div>
        <div class="resume">
            <p class="head">Penanganan Protes Masyarakat</p>
            <p class="content">{p}</p>
        </div>
    </div>
    <div>
        <p class="head">Berdasarkan sektor, kamu seperti:
        </p>
        <div class="tokoh-container">
            {#each t as tokoh}
            <div class="tokoh">
                    <img src="./images/{tokoh.toLowerCase().replace(" ", "-")}.png" alt={tokoh}>
                    <p style:width="100%" style:text-align="center"
                    style:font-size="0.7rem">{tokoh}</p>
            </div>
            {/each}
        </div>
    </div>
    <div class='button-container'>
        <button on:click={() => index = 0}>Selesai</button>
        <a class='button' href="https://projectmultatuli.org/serial/proyeksengsaranasional/">Baca Serial PSN</a>
    </div>
    <!-- <button on:click={() => index = 0}
        style:margin-top="0.5rem"
    >Bagikan</button> -->
</section>

<style>
    section {
        display: flex;
        margin-top: 2rem;
        width:100%;
        height:100%;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }
    div {
        width:90%;
        
    }
    h2 {
        font-family: 'Lexend Giga', sans-serif;
        margin-top: 0;
    }
    p {
        font-family: 'Noto Sans', sans-serif;
        margin: 0;
    }
    .resume {
        margin-bottom:0.5rem;
    }
    .head {
        font-family: 'Lexend Giga', sans-serif;
        font-size: 0.7rem;
        font-weight: bold;
        margin-bottom: 0.1rem;
    }
    .content {
        font-size: 1.2rem;
        font-weight: 300;
    }
    .tokoh-container {
        display: flex;
    }
    .tokoh {
        width:100px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    img {
        width:100px;
        height:100px;
        /* margin-bottom:0.5rem; */
    }
    button {
        margin-top:0;
        font-family: 'Noto Sans', sans-serif;
        background-color: #FDF10F;
        border-radius: 0.5rem;
        font-weight: 600;
        padding:0.3rem;
        padding-left:0.8rem;
        padding-right:0.8rem;
        align-self: flex-start;
    }
    .button {
        margin-top:0;
        font-family: 'Noto Sans', sans-serif;
        background-color: #FDF10F;
        border-radius: 0.5rem;
        font-weight: 600;
        padding:0.3rem;
        padding-left:0.8rem;
        padding-right:0.8rem;
        align-self: flex-start;
        color:black;
        text-decoration: none;
        font-size:0.8rem;;
        border: 2px black outset;
    }
    .button-container {
        display: flex;
        flex-direction: column;
        margin-top:1rem;
        gap:0.2rem;
    }
    @media only screen and (max-width: 400px) {
        .content {
            font-size: 0.9rem;
        }
    }
</style>