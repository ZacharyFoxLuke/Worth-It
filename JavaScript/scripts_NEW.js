
// ---------------- The Brains of the Operation ---------------- //
// ------------------------------------------------------------- //
$modal = $('.modal-frame')
$modal_Rewards_Info = $('#inputFields #rewards-info-message')
$modal_Transaction_Fee = $('#inputFields #transactionFee-info-message')
$modal_Profit = $('#profit-message')
$modal_Loss = $('#loss-message')
$modal_BreakEven = $('#break-even-message')
$modal_Error = $('#error-message')
$modal_About = $('#about-message')
$modal_Contact = $('#contact-message')
$allInputFields = $('#inputFields input')
$oneInputField = $('input')
$submitButton = $('#submitButton')
$dollarsProfit = $('.dollarsProfit')
$dollarsFee = $('.dollarsFee')
$dollarsNet = $('.dollarsNet')

function transactionFeeInput() {
    const variFee = document.getElementById('variFeeSection')
    variFee.style.display = "inline-block"
}

function closeModal() {
    $modal.removeClass('active')
    $modal.addClass('leave')
}

$('.modal-overlay').click(function () {
    closeModal()
})

$('.close').click(function () {
    closeModal()
})

$('#moreInfo1').click(function () {
    $modal_Rewards_Info.toggleClass('active')
    $modal_Rewards_Info.removeClass('leave')
})

$('#moreInfo2').click(function () {
    $modal_Transaction_Fee.toggleClass('active')
    $modal_Transaction_Fee.removeClass('leave')
})

$('#about').click(function () {
    $modal_About.toggleClass('active')
    $modal_About.removeClass('leave')
})

$('#contact').click(function () {
    $modal_Contact.toggleClass('active')
    $modal_Contact.removeClass('leave')
})

for (let i = 0; i < $allInputFields; i++) {
    if ($allInputFields[i].value) {
        $submitButton.toggleClass('animate__animated', 'animate__tada')
    }
}

$submitButton.click(function () {
    const purchaseAmount = document.getElementById('purchaseAmountInput').value
    const rewardsRate = document.getElementById('rewardsRateInput').value / 100
    const transactionFeeInput = document.getElementById('variFeeInput').value / 100
    const transactionFeeNet = purchaseAmount * transactionFeeInput
    const earnedRewards = purchaseAmount * rewardsRate
    
    if (purchaseAmount == '' || rewardsRate == '' || transactionFeeInput == '') {
        $modal_Error.toggleClass('active')
        $modal_Error.removeClass('leave')

    } else if (earnedRewards == transactionFeeNet) {
        $modal_BreakEven.toggleClass('active')
        $modal_BreakEven.removeClass('leave')
        $dollarsProfit.html(rewardsRate * purchaseAmount)
        $dollarsFee.html(transactionFeeNet)

    } else if (earnedRewards < transactionFeeNet) {
        $modal_Loss.toggleClass('active')
        $modal_Loss.removeClass('leave')
        $dollarsProfit.html(rewardsRate * purchaseAmount)
        $dollarsFee.html(transactionFeeNet)
        $dollarsNet.html(earnedRewards - transactionFeeNet)

    } else if (earnedRewards > transactionFeeNet) {
        $modal_Profit.toggleClass('active')
        $modal_Profit.removeClass('leave')
        $dollarsProfit.html(rewardsRate * purchaseAmount)
        $dollarsFee.html(transactionFeeNet)
        $dollarsNet.html(earnedRewards - transactionFeeNet)

    }
    
})




