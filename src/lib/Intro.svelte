<script>
    export let index
</script>
<section>
    {#if index == 1}
        <p>Anda adalah konglomerat dari sebuah negara adikuasa.</p>

        <p>Saat berkunjung ke Indonesia, Anda mendapat undangan makan malam di rumah seorang pejabat. Dia kenalan lama Anda, punya pengaruh besar dan koneksi luas di pemerintahan.</p>

        <p>Saat makan malam, kenalan Anda bertanya, “Kamu tidak tertarik investasi di PSN?”</p>

        <p>
        Anda balik bertanya, “Apa itu PSN?”
        </p>
    {:else if index == 2}
        <p>Kenalan Anda menjelaskan: PSN adalah Proyek Strategis Nasional.</p>

        <p>PSN ini warisan rezim Joko Widodo. Selama 10 tahun pemerintahannya, Jokowi mengutak-atik banyak aturan biar proyek-proyek berlabel PSN bisa berjalan bebas hambatan. Pokoknya, pemerintah siap mengerahkan seluruh aparatur negara untuk mendukung proyekmu!</p>

        <p>Sekarang, Presiden Prabowo Subianto melanjutkan skema PSN. Per September 2025, sudah ada 250 proyek dan program di daftar PSN.</p>

        <p>Tertarik, Anda bertanya lagi, “Bagaimana caranya saya punya PSN?”</p>

    {:else if index == 12}
        <p>Anda mulai yakin berinvestasi di PSN. Namun, masih ada yang mengganjal.</p>

        <p>Anda teringat pernah membaca berita soal bagaimana PSN di Indonesia telah memicu kerusakan lingkungan, konflik lahan, dan pelanggaran HAM.</p>

        <p>Anda tanya pendapat kenalan Anda, yang segera membalas, "Gampang."</p>

    {/if}

    <button on:click={() => {index++}}>LANJUT</button>
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