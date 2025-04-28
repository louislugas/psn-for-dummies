<script>
    export let index
</script>
<section>
    <p>Kamu pasti sering dengar soal Proyek Strategis Nasional (PSN). Selama 10 tahun Jokowi jadi presidenmu, ada 200-an PSN yang total nilai investasinya sampai ribuan triliun! Katanya, PSN-PSN ini bakal bantu menyerap jutaan tenaga kerja.</p>

    <p>Pembangunan besar-besaran, ekonomi naik, masa depan cerah. Kedengerannya keren, ya?</p>

    <p>Mantan presiden kita satu ini kan selalu ingin semuanya serba cepat. “Kerja, kerja, kerja!” Ini juga yang ngebedain PSN dengan proyek-proyek pembangunan lain. Biar PSN bisa jalan sat-set, pemerintahan Joko Widodo bikin banyak perubahan aturan lewat omnibus law UU Cipta Kerja beserta turunan-turunannya, juga keluarin aturan baru kayak inpres, perpres, hingga peraturan menteri. </p>

    <p>
    Kedengeran ribet? Biar makin gampang dipahami, kita bikin game ini. Project Multatuli ajak kamu jadi pebisnis yang mau dapet proyek PSN. Siap? Ayo main! 🚀
    </p>

    <button on:click={() => {index = 2}}>LANJUT</button>
</section>

<style>
    section {
        width:100%;
        height:100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: lightyellow;
    }
    p {
        font-family: "Noto Sans", sans-serif;
        width:90%;
        color:black;
        font-size: 0.9rem;
    }
    button {
        margin-top:1rem;
        font-family: "Atma", sans-serif;
        font-size:1.5rem;
        background-color:#fdf10f;
        border-radius: 1rem;
        padding-left: 1rem;
        padding-right:1rem;
        border: black solid 3px;
        font-weight:500;
    }
    @media only screen and (max-width: 400px) {
        p {
            font-size: 0.8rem;
            margin-top:0;
        }
    }
    
</style>