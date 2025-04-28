<script>
    export let index, area = 0, time = 30
</script>


{#if index >= 2 && index <= 8}
    <img src="./images/joko-widodo-{index == 3 || index == 4 || index == 6 || index == 8 ? "3" : "1" }.png"  alt="Avatar Jokowi">

{:else if index == 9} <!-- PILIH AREA -->
    {#if area == 0}
        <!-- KAWASAN HUTAN & MASYARAKAT ADAT -->
        <img src="./images/siti-nurbaya-bakar.png" alt="Avatar Siti Nurbaya Bakar">

    {:else if area >= 1 && area <= 2}
        <!-- WILAYAH PESISIR & PERTANIAN/PERKEBUNAN-->
        <img src="./images/agus-harimurti-yudhoyono.png" alt="Avatar Agus Harimurti Yudhoyono">

    {:else if area == 3}
        <!-- PEMUKIMAN MASYARAKAT -->
        <img src="./images/listyo-sigit-prabowo.png" alt="Avatar Listyo Sigit Prabowo">

    {/if}

{:else if index == 10} <!-- AMDAL -->
    <img src="./images/joko-widodo-1.png"  alt="Avatar Jokowi">

{:else if index == 11} <!-- DENGARKAN MASYARAKAT ( INTRO )-->
    <img src="./images/luhut-binsar-panjaitan-{time > 10 ? "1" : "2"}.png" alt="Avatar Luhut">

{:else if index == 12} <!-- PROTES MASYARAKAT -->
    <img src="./images/listyo-sigit-prabowo.png" alt="Avatar Listyo Sigit Prabowo">

{:else if index == 13} <!-- PRESEDEN LINGKUNGAN -->
    <img src="./images/joko-widodo-1.png"  alt="Avatar Jokowi">

{:else if index == 14} <!-- BATALKAN PROYEK -->
    <img src="./images/sri-mulyani-indrawati.png" alt="Avatar Sri Mulyani">

{:else if index == 15} <!-- TAMBAH LABEL HIJAU -->
    <img src="./images/joko-widodo-1.png"  alt="Avatar Jokowi">

{:else if index == 16} <!-- CEK FAKTA LAPANGAN KERJA -->
    <img src="./images/joko-widodo-1.png"  alt="Avatar Jokowi">

{:else if index == 17} <!-- CEK FAKTA LAPANGAN KERJA -->
    <img src="./images/airlangga-hartanto.png"  alt="Avatar Airlangga Hartanto">

{:else if index >= 18 && index <= 20} <!-- CEK FAKTA LAPANGAN KERJA -->
    <img src="./images/joko-widodo-4.png"  alt="Avatar Jokowi">

{:else if index == 21} <!-- CEK FAKTA LAPANGAN KERJA -->
    <img src="./images/prabowo-subianto.png"  alt="Avatar Prabowo Subianto">

{:else if index == 22} <!-- CEK FAKTA LAPANGAN KERJA -->
    <img src="./images/joko-widodo-1.png"  alt="Avatar Jokowi">

{:else if index == 23} <!-- GAME OVER AMDAL -->
    <img src="./images/luhut-binsar-panjaitan-3.png" alt="Avatar Luhut Binsar Panjaitan">

{:else if index == 24} <!-- GAME OVER LABEL HIJAU -->
    <img src="./images/joko-widodo-2.png"  alt="Avatar Jokowi">
{/if}

<style>
    img {
        width:100%;
        height:100%;
        /* background-color:indianred; */
        object-fit: contain;
        object-position: center bottom;
    }
</style>