/* ==========================
   GLOBAL PASSWORD
========================== */
const ACTION_PASSWORD = "action123"; // Change your password here

function checkPassword() {
    let pass = prompt("Enter Password");
    return pass === ACTION_PASSWORD;
}

/* ==========================
   ADD LECTURE
========================== */
function addLecture() {
    if (!checkPassword()) {
        alert("❌ Wrong Password!");
        return;
    }

    let title = document.getElementById("lectureTitle").value;
    let link = document.getElementById("lectureLink").value;

    if (title.trim() === "" || link.trim() === "") {
        alert("Please fill all lecture details!");
        return;
    }

    let list = document.getElementById("lectureList");

    let item = document.createElement("div");
    item.className = "list-item";
    item.innerHTML = `
        <b>${title}</b><br>
        <a href="${link}" target="_blank">Open Lecture</a>
        <br><br>
        <button class="deleteBtn" onclick="deleteLecture(this)">Delete</button>
    `;

    list.appendChild(item);

    document.getElementById("lectureTitle").value = "";
    document.getElementById("lectureLink").value = "";

    alert("✅ Lecture Added Successfully!");
}

function deleteLecture(button) {
    if (!checkPassword()) {
        alert("❌ Wrong Password!");
        return;
    }

    button.parentElement.remove();
    alert("🗑 Deleted Successfully");
}

/* ==========================
   SAVE NOTE
========================== */
function saveNote() {
    if (!checkPassword()) {
        alert("❌ Wrong Password!");
        return;
    }

    let noteTitle = document.getElementById("noteTitle").value;
    let noteText = document.getElementById("noteText").value;

    if (noteTitle.trim() === "" || noteText.trim() === "") {
        alert("Please fill note title & content!");
        return;
    }

    let list = document.getElementById("notesList");

    let item = document.createElement("div");
    item.className = "list-item";

    item.innerHTML = `
        <b>${noteTitle}</b>
        <p>${noteText}</p>

        <button class="downloadBtn" onclick="downloadNote('${noteTitle}', \`${noteText}\`)">Download</button>
        <button class="deleteBtn" onclick="deleteNote(this)">Delete</button>
    `;

    list.appendChild(item);

    document.getElementById("noteTitle").value = "";
    document.getElementById("noteText").value = "";

    alert("💾 Note Saved Successfully!");
}

function deleteNote(button) {
    if (!checkPassword()) {
        alert("❌ Wrong Password!");
        return;
    }

    button.parentElement.remove();
    alert("🗑 Note Deleted");
}

/* ==========================
   DOWNLOAD NOTE
========================== */
function downloadNote(title, content) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });

    a.href = URL.createObjectURL(file);
    a.download = `${title}.txt`;
    a.click();
}
