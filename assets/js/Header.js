document.getElementById("lightThemeMode").addEventListener("click", function () {
    document.getElementById("lightThemeMode").style.display = "none";
    document.getElementById("darkThemeMode").style.display = "block";
});

document.getElementById("darkThemeMode").addEventListener("click", function () {
    document.getElementById("darkThemeMode").style.display = "none";
    document.getElementById("lightThemeMode").style.display = "block";
});
